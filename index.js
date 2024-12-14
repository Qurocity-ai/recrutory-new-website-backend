const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ConnectDB  = require("./config/db.js");
const JobRouter = require("./routes/Jobs.router.js");
dotenv.config();
const app = express();

// middlewares 
app.use(express.json());
app.use(cors());


// Test Router 
app.get('/', (req, res) => {
    res.send('Welcome to the Job Portal Backend');
});


// create Job Router 
app.use("/api/jobs",JobRouter)


// This is Basic PORT Setup Here 
const PORT = process.env.Local_PORT||8080;
app.listen(PORT,async()=>{
    try {
       await ConnectDB();
         console.log(`Server is Running : http://localhost:${PORT}`);
    } catch (error) {
        console.log("Something Went Wrong! Sorry!")
    }
   
})


