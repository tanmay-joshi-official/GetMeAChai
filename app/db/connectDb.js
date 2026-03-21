import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/GetMeAChai")
    } catch (error) {
        console.error("MongoDB connection failed:", error)
    }
}

export default connectDB