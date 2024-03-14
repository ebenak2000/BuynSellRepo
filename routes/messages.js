const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.post('/', async (req, res) => {
    const { senderId, receiverId, itemId, content } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO message (senderID, receiverID, itemID, content) VALUES ($1, $2, $3, $4) RETURNING *',
            [senderId, receiverId, itemId, content]
        );
        res.json({ message: result.rows[0] });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;