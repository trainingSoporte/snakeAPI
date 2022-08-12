const express = require('express');
const router = express.Router();
const { getUsers , createUser} = require('./users.controller');


router.get('/',authenticateUser ,(req, res) => {

    try {
        getUsers().then((users) => {
            res.status(200);
            res.send(users);
        }).catch((error) => {
            res.sendStatus(500);
        });

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

});


router.post("/" ,(req, res) => {
    createUser(req.body).then(user => {
        res.status(201);
        res.send(user);
    }).catch(error =>{
        console.error(error);
        res.sendStatus(500);
    });
});

module.exports = router;

