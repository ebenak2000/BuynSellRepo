const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.post('/', (req, res, next) => {
  console.log(req.body, req.session);
  const userID = req.session.user_id;
  const itemID = req.body.favorited;

  const queryString =`
  INSERT INTO FAVORITES (userID, itemID)
  VALUES ((SELECT USERS.userID FROM USERS WHERE userID = $1),
  (SELECT PRODUCT.itemID FROM PRODUCT WHERE itemID = $2))
  RETURNING *;`

  const values = [userID, itemID];
  return db.query(queryString, values)
  .then(res => res.rows)
  .then(res.redirect('/'));
})

module.exports = router;


// INSERT INTO PRODUCT (userID, typeID, title, description, price, status, img_url)
//   VALUES ((SELECT USERS.userID FROM USERS where userID = $1),
//    (SELECT PRODUCTTYPE.typeID FROM PRODUCTTYPE where typeName = $2), $3, $4, $5, $6, $7)
//    RETURNING *;
//    `