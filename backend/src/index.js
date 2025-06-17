import express from "express";
<<<<<<< HEAD
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import cors from "cors";

// import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
// import { app, server } from "./lib/socket.js";


dotenv.config();



const app=express();
const PORT=process.env.PORT;
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
=======
import authRoutes from "./routes/authRoutes.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";


dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log("server running on port PORT:"+PORT);
>>>>>>> 0fd5de0e9eb7d86c8108a508edde1de2aa6d8ec1
    connectDB();
})