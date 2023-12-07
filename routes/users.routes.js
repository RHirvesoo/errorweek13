const express = require('express');
const db = require('../db');
const bcrypt = require('bcrypt');
const router = express.Router();



router.post('/singup', async (req, res) => {
    const{username, password} = req.body;

    const data = await db.query('SELECT * FROM users WHERE username = $1', [username]);

    if(data.rows.lenght != 0) {
        res.status(400).json({
            error: 'Username already taken.'
        });
    } else {
        bcrypt.hash(password, 10, (error, hash) => {
            console.log(hash);
        });
    }
});

module.exports = router;