const express = require('express');
const router  = express.Router();
const db = require("../db/connection");
const { route } = require('./newItem');


router.post('/', (req, res) => {
  const queryString = `
  UPDATE PRODUCT
  WHERE itemID = $1
  SET status = false;
  `

  const values = [req.body.itemID]

  return db.query(queryString, values)
  .then( res => {
    res.JSON(res.rows)
})
.catch(error => {
  console.error('Error', error);
res.status(500).send('Error');
});
})



module.exports = router;