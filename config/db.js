import mongoose from "mongoose";

const connectToDb = async ()=> {
    try {
        let value = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DataBase: "+value.connection.host)
    } catch (error) {
        console.log("Error in connecting DataBase: "+error)
        process.exit(1);
    }
}

export default connectToDb