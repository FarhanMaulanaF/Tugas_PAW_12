const express = require('express');
const router = express.Router();

// import controller
const { requireSignin, adminMiddleware } = require('../controllers/auth.controllers');
const { readController, updateController, updateWebinar, getWebinardata } = require('../controllers/user.controllers');

router.get('/user/:id',readController);

// // router.post('/user/updateWebinar', requireSignin, updateWebinar);
// router.put('/admin/update', requireSignin, adminMiddleware, updateController);
// // router.get('/getWebinardata',requireSignin, adminMiddleware,  getWebinardata );
module.exports = router;