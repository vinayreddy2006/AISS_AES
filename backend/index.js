//libraries imports
import express from "express";
import cors from "cors";



// File imports
import connectDB from "./configurations/database.js";



const PORT = 5000;
connectDB();


const app = express();



app.use(cors());
app.use(express.json());




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});