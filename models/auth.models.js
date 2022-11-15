const mongoose = require("mongoose");
const crypto = require("crypto");
const postSchema = require("./post_models").schema;

//User sChema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    institusi: {
      type: String,
      default: "",
    },
    tabungan: {
      type: Number,
      default: 0,
    },
    pemasukan: {
      type: Number,
      default: 0,
    },
    pengeluaran: {
      type: Number,
      default: 0,
    },
    isHavingInit: {
      type: Boolean,
      default: false,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: String,
      default: "Peserta",
    },
    link_profil: {
      type: String,
      default: "",
    },
    webinar: {
      data: String,
      default: "",
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
    posts: [postSchema],
  },

  {
    timestamps: true,
  }
);

// Virtual Password
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  //Compare password between plain get from user and hashed
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

module.exports = mongoose.model("pengguna", userSchema);
