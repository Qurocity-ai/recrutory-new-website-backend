const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const ConnectDB = async() => {
    try {
        // await mongoose.connect("mongodb+srv://kushawahyogesh93:Yogesh@cluster0.j9tkecq.mongodb.net/Quriocity?retryWrites=true&w=majority&appName=Cluster0");
        await mongoose.connect(process.env.Mongo_URL);
        console.log("Connected To DataBase Wow!")
    } catch (error) {
        console.log("Failed To Connect DataBase Sorry!")
    }

}
module.exports = ConnectDB;