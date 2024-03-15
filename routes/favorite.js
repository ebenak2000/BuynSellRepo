const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.get('/', (req, res, next) => {
  
  const userID = req.session.user_id;
  const sqlQuery = `
    SELECT p.itemID, p.title, p.description, p.price, p.status, p.img_url,
           CASE WHEN p.status THEN 'Available' ELSE 'Not Available' END AS availability
    FROM FAVORITES f
    JOIN PRODUCT p ON f.itemID = p.itemID
    WHERE f.userID = $1
    LIMIT 10`;
  const values = [userID];
  //values = 1;
  db.query(sqlQuery, values)
  .then(data => {
    const templateVars = { user: req.session.userid, data: data.rows, user: userID, name: req.session.user_name }
    res.render('favorite', templateVars);

  })
  .catch(e => {
    console.log(e);
    res.status(500).send("An error occurred while fetching favorites.");
  });
});




module.exports = router;


