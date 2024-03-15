const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.get('/', (req, res, next) => {
  // console.log(req.params.id)
  res.render('register')
})

router.post("/", (req, res) => {
  const firstName = req.body.input_first;
  const lastName = req.body.input_last
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  // Checks if the inputs are blank
  if (firstName === '' || lastName === '' || email === '' || password === '') {
      const templateVars = {error: 'Empty'};
      res.render('register', templateVars);
  } else if (email) {
      // Checks if the email exists in the database
      const sqlQuery = `SELECT * FROM users WHERE email = $1`;
      const sqlValues = [email];

      db.query(sqlQuery, sqlValues)
          .then(data => {
              // If query has a truthy length -> the email exists in the database
              if (data.rows.length) {
                  const templateVars = {error: 'Empty'};
                  res.render('register', templateVars);
              } else {
                  // Creates a new user in the users database
                  const updateQuery = `INSERT INTO users (firstName, lastName, email, phone, password)
                      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
                  const values = [firstName, lastName, email, phone, password];
                  req.session['user_id'] = req.body.email;
                  const templateVars = {currentUser: req.session['user_id']};
                  res.redirect('/login');
                  return db.query(updateQuery, values);
              }


          })
          .catch(err => {
              console.error('Error:', err);
              // Handle error appropriately
              res.status(500).send('Internal Server Error');
          });
  }
});


module.exports = router;
