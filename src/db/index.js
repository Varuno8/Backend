import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB

/*
Mongoose Connection:

This function is responsible for connecting to the MongoDB database using the mongoose.connect() method.
The connection string is constructed using environment variables (process.env.MONGODB_URI) and a constant DB_NAME which likely holds the name of the database.
Connection success:

If the connection is successful, the code logs a message to the console indicating that MongoDB is connected and prints the database host information.
Error handling:

If an error occurs during the connection attempt, it logs the error message to the console and exits the process using process.exit(1) to ensure the application does not continue running in a failed state.
*/
