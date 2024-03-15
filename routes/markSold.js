const express = require('express');
const router  = express.Router();
const db = require("../db/connection");
const { route } = require('./newItem');


router.post('/', (req, res) => {
  console.log(req.body, "THIS IS REQBODY")
  const queryString = `
  UPDATE PRODUCT
  SET status = false
  WHERE itemID = $1;
  `

  const values = [req.body.productID]

  return db.query(queryString, values)
  .then( result => {
    res.redirect('/');
})
.catch(error => {
  console.error('Error', error);
res.status(500).send('Error');
});
})



module.exports = router;