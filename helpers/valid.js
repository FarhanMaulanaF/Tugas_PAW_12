const {
    check
} = require('express-validator');
exports.validSign = [
    check('name', 'Nama dibutuhkan').notEmpty()
    .isLength({
        min: 4,
        max: 32
    }).withMessage('nama harus berisi karakter berjumlah di atas tiga dan maksimal 32'),
    check('email')
    .isEmail()
    .withMessage('Alamat email harus valid'),
    check('password', 'password dibutuhkan').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password berisi minimal 6 karakter').matches(/\d/).withMessage('Password harus berisi minimal 1 angka')
]

exports.validLogin = [
    check('email')
    .isEmail()
    .withMessage('Alamat email harus valid'),
    check('password', 'password dibutuhkan').notEmpty()
]


exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Alamat email harus valid')
];

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password berisi minimal 6 karakter')
];