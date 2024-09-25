import mongoose from "mongoose";

export const ConnectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${con.connection.host}`);
    }
    catch(error){
        console.error(`Error: ${error.messsage}`);
        process.exit(1);
    }
};