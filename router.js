'use strict'; 
const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const asyncWrapper = require('./middleware/asyncWrapper');
const oAuth = require('./middleware/oauth');

router.get('/oauth',  oAuth, asyncWrapper(async(req, res, next)=> {
    await res.status(200).json( { user: req.user , token: req.token });
  }))

 module.exports = router;