const express = require('express')
const router = express.Router()

//Load controllers
const{
    
    addingPost,
    updatePost
    // forgotPasswordController,
    // resetPasswordController
} = require('../controllers/subdocs_controller.js')


router.post('/addpost/:id',addingPost);
router.put('/updatepost/:id',updatePost);


module.exports=router