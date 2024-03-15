const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.post('/', async (req, res) => {
    console.log(req.session.user_id);
    const { itemId, content } = req.body;
    console.log(req.body);
    try {
        
        const result = await db.query(
            'INSERT INTO message (senderID, receiverID, itemID, content) VALUES ($1, (SELECT userid FROM product WHERE itemisd=$2), $2, $3) RETURNING *',
            [req.session.user_id, itemId, content]
        );
        res.json({ message: result.rows[0] });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;