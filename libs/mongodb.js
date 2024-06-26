import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongo DB Connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB;