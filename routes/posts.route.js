const express = require('express')
const router = express.Router()

//Load controllers
const{
    
    getRecord,
    addingPost,
    updatePost,
    deletePost,
    readPost
    // forgotPasswordController,
    // resetPasswordController
} = require('../controllers/subdocs_controller.js')

const{
    requireSignin
} = require('../controllers/auth.controllers')


router.get('/getRecord',getRecord);
router.post('/addpost/:id',requireSignin,addingPost);
router.put('/updatepost/:id',requireSignin,updatePost);
router.get('/readpost/:id',requireSignin,readPost);
router.put('/deletepost/:id',requireSignin,deletePost);



module.exports=router