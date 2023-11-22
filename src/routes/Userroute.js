// driverRoutes.js
const express = require('express');
const router = express.Router();
const Usercontroller = require('../controller/Usercontroller');
const Usercontrollerget = require('../controller/Usercontrollerget');


// Assuming driverController has a function named 'registerDriver'

router.post('/register', Usercontroller.registerUser);
router.post('/login', Usercontroller.userLogin);
router.get('/profile/:Phonenumber', Usercontroller.getUserProfile);
router.get('/driverdetails',Usercontroller.driverdetails);
router.get('/register',Usercontrollerget.getinfomain)

module.exports = router;
