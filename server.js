// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require("cookie-session");
const db = require('./db/connection');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "userid",
    keys: ["BuySell"],

    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }),
);
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const userLogin = require('./routes/login');
const userRegister = require('./routes/register');
const userLogout = require('./routes/logout');
const userFavorite = require('./routes/favorite');
const newItem = require('./routes/newItem');
const deleteItem = require('./routes/deleteItem');
const markSold = require('./routes/markSold');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/login', userLogin);
app.use('/register',userRegister);
app.use('/logout', userLogout);
app.use('/favorite', userFavorite);
app.use('/newItem', newItem);
app.use('/delete', deleteItem);
app.use('/sold', markSold);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  console.log(req.session, "REQ SESSION");
  const templateVars = { user: req.session.user_id, name: req.session.user_name };
  console.log(templateVars, "TEMPLATE VARSSSS")
  const sqlQuery = 'SELECT itemID, title, description, price, status, img_url FROM PRODUCT;';

  db.query(sqlQuery)
      .then(data => {
          templateVars.products = data.rows; // Assign data to templateVars.products
          res.render('index', templateVars);
      })
      .catch(e => {
          console.log(e);
          res.status(500).send("An error occurred while fetching products.");
      });
});


app.post('/', (req, res) => {
  const minPrice = req.body.minPrice || 0; // Default to 0 if not provided
  const maxPrice = req.body.maxPrice || Number.MAX_SAFE_INTEGER; // Default to max safe integer if not provided

  const sqlQuery = 'SELECT itemID, title, description, price, status, img_url FROM PRODUCT WHERE price >= $1 AND price <= $2;';
  const values = [minPrice, maxPrice];

  db.query(sqlQuery, values)
      .then(data => {
        res.render('index', { products: data.rows, minPrice, maxPrice, user: req.session.userid });
      })
      .catch(e => {
          console.log(e);
          res.status(500).send("An error occurred while fetching products.");
      });
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
