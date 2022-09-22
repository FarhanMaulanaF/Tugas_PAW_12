const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  pengeluaran:{ type: Number },  
  pemasukan:{ type: Number },
  tabungan:{ type: Number },
  title: { type: String, required: true },
  deskripsi: { type: String }, 
  tempat: { type: String },  
  date:{type:String}
 
},{
  timestamps: true
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;