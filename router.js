'use strict';
const express = require('express');
const router = express.Router();
const asyncWrapper = require('../../middleware/asyncWrapper');

// Does this link to schema or collections

router.post('/signup', asyncWrapper(async (req, res) => {
    console.log('body of signup request', req.body);
    const user = {
                username: req.body.username,
                password: req.body.password
                }
                // Change collection name?
            await userCollection.create(user);
            return res.json({
                user: req.user,
                message: 'Signup Successful!'
            });
}));

router.post('/signin', asyncWrapper(async (req, res) => {
    return res.json({});
}));

router.get('/users', asyncWrapper(async (req, res) => {
    // Change name of userCollection here
    const users = userCollection.readAll();
    if (users === null) {
        return res.status(400).send('Unable to find user')
    } else {
        return res.json(users);
    }

}));

module.exports = router;