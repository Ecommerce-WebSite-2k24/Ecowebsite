const express = require('express');
const authrouter = express.Router();
const { registerUser, signInUser} = require('../Controller/authController');



authrouter.post('/signup', registerUser);



authrouter.post('/signin', signInUser);

module.exports = authrouter