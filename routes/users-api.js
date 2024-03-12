/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;

router.post('/:userId/favorites', (req, res) => {
  const { userId } = req.params;
  const { itemId } = req.body;
  const query = `INSERT INTO favorites (userID, itemID) VALUES (${userId}, ${itemId})`;
  db.query(query)
    .then(() => {
      res.status(201).send('Favorite added');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


router.get('/:userId/favorites', (req, res) => {
  const { userId } = req.params;
  const query = `SELECT * FROM product WHERE itemID IN (SELECT itemID FROM favorites WHERE userID = ${userId})`;
  db.query(query)
    .then(data => {
      const favorites = data.rows;
      res.json({ favorites });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});