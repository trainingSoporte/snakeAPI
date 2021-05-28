const express = require('express');
const router = express.Router();
const { getUsers } = require('./users.controller');


router.get('/', (req, res) => {

    try {
        let users = getUsers();
        res.status(200);
        res.send(users);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

});


module.exports = router;

