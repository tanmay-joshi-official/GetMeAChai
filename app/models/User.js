import mongoose from "mongoose"
const { Schema, model } = mongoose

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    username: { type: String, required: true },
    profile: { type: String },
    cover: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    razorpay_key_id: { type: String },
    razorpay_key_secret: { type: String }
})

export default mongoose.models.User || model("User", UserSchema)