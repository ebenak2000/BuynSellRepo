const express = require('express');
const router  = express.Router();
const db = require("../db/connection");
const { Template } = require('ejs');


router.get('/', (req, res) => {
  const templateVars = { user: req.session.userid };
  console.log(templateVars)
  res.render('newItem', templateVars)
})

// router.post('/newListing', (req, res) => {
//   console.log(req.body)
// })
router.post('/', (req, res) => {
  const newItem = req.body;
  // console.log(req.body);
  // console.log(req.session.user_id);
  //req.session.user_id === users id in db

  // userID INTEGER,
  // typeID INTEGER,
  // title VARCHAR(255),
  // description TEXT,
  // price INTEGER,
  // status BOOLEAN,
  // FOREIGN KEY (userID) REFERENCES USERS(userID),
  // FOREIGN KEY (typeID) REFERENCES PRODUCTTYPE(typeID)
  const queryString = `
  INSERT INTO PRODUCT (userID, typeID, title, description, price, status, img_url)
  VALUES ((SELECT USERS.userID FROM USERS where userID = $1),
   (SELECT PRODUCTTYPE.typeID FROM PRODUCTTYPE where typeName = $2), $3, $4, $5, $6, $7)
   RETURNING *;
   `

   const values = [req.session.user_id, req.body.category, req.body.itemTitle, req.body.itemDescription, req.body.price, true, req.body.img_url]
  
   return db.query(queryString, values)
   .then(res => res.rows)
   .then(res.redirect('/'));
})




module.exports = router;