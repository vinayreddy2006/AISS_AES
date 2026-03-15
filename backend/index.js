//libraries imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import 'dotenv/config.js';
dotenv.config();



// File imports
import connectDB from "./configurations/database.js";
import sendEmail from "./configurations/nodemailer.js";


const PORT = 5000;
connectDB();

sendEmail();

const app = express();



app.use(cors());
app.use(express.json());




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});