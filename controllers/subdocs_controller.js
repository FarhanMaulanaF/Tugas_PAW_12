const User = require("../models/auth.models");

exports.getRecord = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addInitialValue = async (req, res) => {
  User.findById(req.params.id, function (err, result) {
    if (!err) {
      if (!result) {
        res.sendStatus(404).send("User was not found").end();
      } else {
        console.log(req.body);
        console.log(req.body.isHavingInit);
        result.isHavingInit = req.body.isHavingInit;
        result.tabungan = parseInt(req.body.initialValue);
        result.save(function (saveerr, saveresult) {
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

exports.addingPost = (req, res) => {
  //find the user first, then add the post to it
  User.findById(req.params.id, function (err, result) {
    if (!err) {
      if (!result) {
        res.sendStatus(404).send("User was not found").end();
      } else {
        console.log(req.body);
        let tabungan_ref = 0;
        let body_perubahan = 0;
        if (req.body.pengeluaran != "") {
          body_perubahan = parseInt(req.body.pengeluaran);
          tabungan_ref = -body_perubahan;
          result.pengeluaran = result.pengeluaran + body_perubahan;
          console.log("ini adalah pengeluarans");
          console.log(tabungan_ref);
        } else if (req.body.pemasukan != "") {
          body_perubahan = parseInt(req.body.pemasukan);
          console.log("ini adalah perubahan di dalam pemasukan");
          console.log(body_perubahan);
          tabungan_ref = body_perubahan;
          result.pemasukan = result.pemasukan + body_perubahan;
        }

        console.log(tabungan_ref);
        result.tabungan = result.tabungan + tabungan_ref;
        console.log(result.tabungan);
        req.body.tabungan = result.tabungan;
        console.log("ini adalah pengeluaran");
        console.log(tabungan_ref);
        console.log(req.body);
        result.posts.push(req.body);
        result.markModified("posts");
        result.save(function (saveerr, saveresult) {
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

exports.readPost = (req, res) => {
  //find the user first, then add the post to it
  User.findById(req.params.id, function (err, result) {
    if (!err) {
      if (!result) {
        res.sendStatus(404).send("User was not found").end();
      } else {
        return res.status(200).json(result.posts);
      }
    } else {
      res.status(400).send("ERRORRR");
    }
  });
};

exports.updatePost = (req, res) => {
  //find user by its id, update its post with what's in req.body
  User.findById(req.params.id, function (err, result) {
    if (!err) {
      if (!result) {
        res.status(404).send("User was not found");
      } else {
        result.posts.id(req.body._id).deskripsi = req.body.deskripsi;
        result.posts.id(req.body._id).title = req.body.title;

        result.markModified("posts");
        result.save(function (saveerr, saveresult) {
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

exports.deletePost = (req, res) => {
  //find the user by the id parameter first, then locate and remove the post specified by the id in req.body
  User.findById(req.params.id, function (err, result) {
    if (!err) {
      if (!result) {
        res.status(404).send("User was not found");
      } else {
        let tabungan_ref = 0;
        let body_perubahan = 0;
        if (result.posts.id(req.body._id).pengeluaran != "") {
          body_perubahan = result.posts.id(req.body._id).pengeluaran;
          console.log(
            "ini adalah body perubahan dari pengeluaran" + body_perubahan
          );
          tabungan_ref = body_perubahan;
          result.pengeluaran = result.pengeluaran - body_perubahan;
        }
        if (result.posts.id(req.body._id).pemasukan != "") {
          body_perubahan = result.posts.id(req.body._id).pemasukan;
          console.log(
            "ini adalah body perubahan dari pemasukan " + body_perubahan
          );

          tabungan_ref = -body_perubahan;

          result.pemasukan = result.pemasukan + tabungan_ref;
        }
        result.tabungan = result.tabungan + tabungan_ref;

        result.posts.id(req.body._id).remove(function (removeerr, removresult) {
          if (removeerr) {
            res.status(400).send(removeerr.message);
          }
        });
        result.markModified("posts");
        result.save(function (saveerr, saveresult) {
          if (!saveerr) {
            res
              .status(200)
              .send(
                `Anda berhasil menghapus transaksi ${req.params.id}` +
                  saveresult
              );
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
