const express = require('express');
const router = express.Router();
const db = require('../db/connection');
//const cookieSession = require("cookie-session");

const getUser = function (user_email, user_password) {
  const sqlQuery = `SELECT * FROM users WHERE email = $1;`;
  const sqlValues = [user_email];
  return db.query(sqlQuery, sqlValues)
    .then(data => {
      const user = data.rows[0];
      return user;
    })

    .catch(err => {
      console.error('Error executing query', err);


    });

};







router.get('/', (req, res, next) => {
  console.log(req.params.id)
  res.render('login')
})

router.post('/', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  getUser(email, password)
    .then(user => {
      if(user && user.password === password){
        req.session.user_id = user.id;
        res.redirect('index')
        return;
      }
      res.redirect('/login')
    })



})





module.exports = router;
