const express = require('express')
const router = express.Router()

//Load controllers
const{
    
    addingPost,
    updatePost,
    deletePost,
    readPost
    // forgotPasswordController,
    // resetPasswordController
} = require('../controllers/subdocs_controller.js')


router.post('/addpost/:id',addingPost);
router.put('/updatepost/:id',updatePost);
router.get('/readpost/:id',readPost);
router.put('/deletepost/:id',deletePost);



module.exports=router