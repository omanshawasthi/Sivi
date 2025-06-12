import express from "express";
import authRoutes from "./routes/authRoutes.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";


dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log("server running on port PORT:"+PORT);
    connectDB();
})