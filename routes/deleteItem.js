const express = require('express');
const router  = express.Router();
const db = require("../db/connection")


router.get('/', (req, res) => {
  console.log(req.body,"reqbody");
  console.log(req.param, "reqparams");
  res.render('deleteItem')
})

router.post('/', (req, res) => {
  console.log(req.body,"reqbody");
  const queryString = `
  DELETE FROM PRODUCT
  WHERE productID = $1 
  `;

  const values = [req.body.productID]
  return db.query(queryString, values)
  .then(result => {
    if (result.rowCount === 0) {
      res.status(404).send('Product not found or you do not have permission to delete it.');
    } else {
      res.redirect('/');
    }
  })
  .then(res.redirect('/'))
  .catch(error => {
    console.error('Error deleting product:', error);
    res.status(500).send('Error deleting product.');
  });
})

module.exports = router;