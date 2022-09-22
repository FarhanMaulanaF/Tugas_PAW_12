const User = require('../models/auth.models');
const expressJwt = require('express-jwt');
sendEmail = require('../utils/sendEmail')
exports.readController =  (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    User.findById(userId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User tidak ditemukan'
            });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    });
};

exports.updateWebinar = (req, res) => {
      User.findOne({ _id: req.auth._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User tidak ditemukan'
            });
        }
          const {name,email} = user
        
          const terdaftar = "Terdaftar"

          const message = `
          <p>Hai, ${name} </p>

                <p> Terimakasih telah mendaftar pada acara Webinar Nesco 2022.</p>
                Dengan surat elektronik ini, kami beritahukan bahwa Anda telah terdaftar di acara Webinar.

                <p>Agar tetap terhubung dengan kami, silahkan ikuti akun Instagram kami. Jika Anda masih memiliki pertanyaan terkait dengan  acara, 
                silahkan segera menghubungi contact person kami di:</p>
                <p>Vina - 082136105830 </p>

                <p><b>Salam,</b></p>
                <p>Panitia Nesco 2022</p>`  ;
          return user.updateOne(
            {
                webinar: terdaftar
            },
            (err, success) => {
              if (err) {
                console.log('RESET PASSWORD LINK ERROR', err);
                return res.status(400).json({
                  error:
                    'Kesalahan koneksi database pada permintaan verifikasi webinar password'
                });
              } else {
                try {
                  sendEmail({
                    
                    to: email, subject : "Pendaftaran Anda Terkonfirmasi! ",
                    text : message,
                })
                
                res.status(200).json({success: true, data: 
                    " Email Sent"})
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    errors: errorHandler(err)
                  });
        
            
            }
              }
            }
          );
        }
      );
    }
  ;
  
exports.updateController = (req, res) => {
    
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { name, password, link_profil, institusi } = req.body;

    User.findOne({ _id: req.auth._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User tidak ditemukan'
            });
        }
        if (!name) {
            return res.status(400).json({
                error: 'Nama wajib diisi'
            });
        } else {
            user.name = name;
        }
        if (!institusi) {
            return res.status(400).json({
                error: 'Institusi wajib diisi'
            });
        } else {
            user.institusi= institusi;
        }

        if (password) {
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password harus berisi minimal 6 karakter'
                });
            } else {
                user.password = password;
            }
        }

        user.link_profil = link_profil;

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'Update user gagal'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};

exports.getWebinardata = async(req,res)=>{
    try {
        const user = await User.find({webinar : "Terdaftar"});
        res.status(201).json(user)
    } catch (error) {
        res.status(422).json(error);
    }
}