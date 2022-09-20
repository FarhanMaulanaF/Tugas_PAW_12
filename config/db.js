const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect('mongodb://dbUser1:TugasPWA1@cluster0-shard-00-00.c2zet.mongodb.net:27017,cluster0-shard-00-01.c2zet.mongodb.net:27017,cluster0-shard-00-02.c2zet.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-68nqrx-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
}; 

module.exports = connectDB;