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
})




module.exports = router;