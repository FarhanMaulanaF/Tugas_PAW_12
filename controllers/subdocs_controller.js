
const User = require('../models/auth.models')
exports.addingPost = (req, res) => {

    //find the user first, then add the post to it
    User.findById(req.params.id, function(err, result) {
      if (!err) {
        if (!result){
          res.sendStatus(404).send('User was not found').end();
        }
        else{
          let tabungan_ref = 0;
          
          if(req.body.pengeluaran != null){
             tabungan_ref = - req.body.pengeluaran;
             result.pengeluaran = result.pengeluaran + req.body.pengeluaran

          };
          if(req.body.pemasukan != null){
            tabungan_ref = req.body.pemasukan;
            result.pemasukan = result.pemasukan + req.body.pemasukan

          };
          result.tabungan = result.tabungan + tabungan_ref
          req.body.tabungan = result.tabungan;
          result.posts.push(req.body);
          result.markModified('posts'); 
          result.save(function(saveerr, saveresult) {
            if (!saveerr) {
              res.status(200).send(saveresult);
            } else {
              res.status(400).send(saveerr.message);
            }
          });
        }
      } else {
        res.status(400).send("ERRORRR");
      }
    });
  };

  exports.readPost = (req, res) => {

    //find the user first, then add the post to it
    User.findById(req.params.id, function(err, result) {
      if (!err) {
        if (!result){
          res.sendStatus(404).send('User was not found').end();
        }
        else{
          return res.status(200).send(
           result.posts
          );
        }
      } else {
        res.status(400).send("ERRORRR");
      }
    });
  };


  exports.updatePost =  (req, res) => {
    //find user by its id, update its post with what's in req.body
    User.findById(req.params.id, function(err, result) {
      if (!err) {
        if (!result){
          res.status(404).send('User was not found');
        }
        else{ 
          
          result.posts.id(req.body._id).title = req.body.title;
          result.posts.id(req.body._id).deskripsi = req.body.deskripsi;
          result.markModified('posts'); 
          result.save(function(saveerr, saveresult) {
            if (!saveerr) {
              res.status(200).send(saveresult.posts);
            } else {
              res.status(400).send(saveerr.message);
            }
          });
        }
      } else {
        res.status(400).send(err.message);
      }
    });
  };

  exports.deletePost =  (req, res) => {
    //find the user by the id parameter first, then locate and remove the post specified by the id in req.body 
    User.findById(req.params.id, function(err, result) {
      if (!err) {
        if (!result){
          res.status(404).send('User was not found');
        }
        else{
          result.posts.id(req.body._id).remove(function(removeerr, removresult) {
            if (removeerr) {
              res.status(400).send(removeerr.message);
            }
          });
          result.markModified('posts'); 
          result.save(function(saveerr, saveresult) {
            if (!saveerr) {
              res.status(200).send(saveresult);
            } else {
              res.status(400).send(saveerr.message);
            }
          });
        }
      } else {
        res.status(400).send(err.message);
      }
    });
  };