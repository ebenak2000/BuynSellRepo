const express = require('express');
const router  = express.Router();


/*
router.get('/', (req, res) => {
  res.render('favorite');
});
 */

router.get('/', async (req, res) => {
  try {
    /* const userID = req.query.userID; */
    const userID = 1;
    const query = 'SELECT * FROM product WHERE itemID IN (SELECT itemID FROM favorites WHERE userID = $1)';
    const { rows } = await pool.query(query, [userID]);
    res.json({ favorites: rows });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  res.render('favorite');
});




module.exports = router;



//SELECT p.itemID, p.title, p.description, p.price
//FROM FAVORITES f
//JOIN PRODUCT p ON f.itemID = p.itemID
//WHERE f.userID = [user_id];


//INSERT INTO FAVORITES (userID, itemID)
//VALUES (user_id_value, item_id_value);
