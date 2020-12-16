// 'use strict'; 

// Don't think we need this file as Bryant has set up routes in Server Repo



// const express = require('express');
// const router = express.Router();
// const asyncWrapper = require('./middleware/asyncWrapper');

// // Add in collections and schema here right?

// router.post('/signup', asyncWrapper(async (req, res) => {
//     console.log('body of signup request', req.body);
//     const user = {
//                 username: req.body.username,
//                 password: req.body.password
//                 }
//                 // Change collection name?
//             await userCollection.create(user);
//             return res.json({
//                 user: req.user,
//                 message: 'Signup Successful!'
//             });
// }));

// router.post('/signin', asyncWrapper(async (req, res) => {
//     return res.json({});
// }));

// router.get('/users', asyncWrapper(async (req, res) => {
//     // Change name of userCollection here
//     const users = userCollection.readAll();
//     if (users === null) {
//         return res.status(400).send('Unable to find user')
//     } else {
//         await userCollection.create(user);
//     }

// }));

// module.exports = router;