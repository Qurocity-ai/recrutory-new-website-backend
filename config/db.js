const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const ConnectDB = async () => {
    try {
        // await mongoose.connect("mongodb+srv://qurocityai:Qurocity%402025@cluster0.gzafo.mongodb.net/recrutory?retryWrites=true&w=majority&appName=Cluster0");
        await mongoose.connect(process.env.Mongo_URL);
        console.log("Connected To DataBase Wow!");
    } catch (error) {
        console.error("Failed To Connect DataBase Sorry!", error.message);
    }
};



module.exports = ConnectDB;