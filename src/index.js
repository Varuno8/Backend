// require('dotenv').config({path:'./env'}) doesn't look good required before import so second method is there

import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";


dotenv.config({
    path: './env'
})
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERRR:", error);
            throw error;
        });
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        });
    })
  .catch((err) => {
    console.log("Mongo db connection failed !!", err);
  }) 
/*
dotenv configuration: The code uses the dotenv package to load environment variables from the .env file located at ./env. This allows the application to access sensitive configuration data (like database URIs and API keys) without hardcoding them in the codebase.

connectDB function: The connectDB function is called to establish a connection to the MongoDB database. It returns a promise that resolves if the connection is successful and rejects if it fails.

Error handling:

If the database connection is successful, the code sets up an error handler for the Express application using app.on("error", ...).
The server is started by listening on a port defined in the environment variables (process.env.PORT) or fallback to port 8000.
If the connection fails, the error is caught and logged with the message "Mongo db connection failed !!".
*/







/*
import express from "express";

const app = express()
    
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log('App is listening on port ${process.env.PORT}');
        })
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
})()
*/
