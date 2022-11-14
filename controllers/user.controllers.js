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

