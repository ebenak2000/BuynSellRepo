const express = require('express');
const router  = express.Router();
const db = require("../db/connection")


router.get('/', (req, res) => {
  console.log(req.body,"reqbody");
  console.log(req.params, "reqparams")
  const templateVars = { user: req.session.user_id, name: req.session.user_name };
  console.log(req.param, "reqparams");
  res.render('deleteItem', templateVars)
})

router.post('/', (req, res) => {
  console.log(req.body,"reqbody");
  
  const productID = req.body.productID;
  const queryString = `
  DELETE FROM PRODUCT
  WHERE itemID = $1 
  `;

  const values = [productID]
  console.log(values, "HERE ARE THE VALUES");
  return db.query(queryString, values)
  .then(result => {
    if (result.rowCount === 0) {
      res.status(404).send("error deleting product")
    } else {
      res.redirect('/')
    }
  })
  .catch(error => {
    console.error('Error deleting product:', error);
    res.status(500).send('Error deleting product.');
  });
})

module.exports = router;