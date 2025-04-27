import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongoDB connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(`MongoDB error: ${error}`);
    }
};