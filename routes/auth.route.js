const express = require('express')
const router = express.Router()

//Validation
const{
    validSign,
    validLogin,
    forgotPasswordValidator,
     resetPasswordValidator
} = require('../helpers/valid')


//Load controllers
const{
    registerController,
   activationController,
   signinController,
 forgotPasswordController,
    resetPasswordController
} = require('../controllers/auth.controllers.js')


router.post('/register',validSign,registerController);
router.post('/activation',activationController);
router.post('/login',validLogin,signinController);
router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
router.put('/resetpassword', resetPasswordValidator, resetPasswordController);





module.exports=router