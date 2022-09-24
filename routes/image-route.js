const express = require('express');
const multer = require('multer');
 const router = express.Router()
 const {
addImage,deleteImage
 } = require('../controllers/imagesController');




 //Setting up multer as a middleware to grab photo uploads
const storage = multer.memoryStorage();



;

const fileFilter = (req, file, cb) => {//miidlleeeWAREEEE huehehehe

//bisa nambahin size
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb({ message: "Unsupported file format" }, false);
    }
  };


 const upload = multer({storage: storage}).single('file');
 // POST - Add Image to Cloud Storage
 router.post('/upload', upload, addImage);
 router.post('/deleteImage',deleteImage);
 module.exports = router;