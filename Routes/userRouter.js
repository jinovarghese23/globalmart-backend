const express = require('express');
const router = new express.Router();

const userController = require('../Controllers/userController');

// define path
router.post('/user-register', userController.registerController);

// user login
router.post('/user-login', userController.loginController)



module.exports = router;