const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

/* router.get('/', (req, res, next) => {
  console.log(req.params.id)
  res.render('favorite')
}) */

router.get('/', (req, res, next) => {
  console.log(req.params.id);
  const sqlQuery = `SELECT p.itemID, p.title, p.description, p.price, p.status, p.img_url
                    FROM FAVORITES f
                    JOIN PRODUCT p ON f.itemID = p.itemID
                    WHERE f.userID = $1
                    LIMIT 10`;
  const values = [req.session['user_id']];
  console.log("values");
  console.log(values);
  //values = 1;
  db.query(sqlQuery, values)
  .then(data => {
    console.log(data);
    res.render('favorite', { data: data.rows });
  })
  .catch(e => {
    console.log(e);
    res.status(500).send("An error occurred while fetching favorites.");
  });
});




module.exports = router;



//SELECT p.itemID, p.title, p.description, p.price
//FROM FAVORITES f
//JOIN PRODUCT p ON f.itemID = p.itemID
//WHERE f.userID = [user_id];


//INSERT INTO FAVORITES (userID, itemID)
//VALUES (user_id_value, item_id_value);
