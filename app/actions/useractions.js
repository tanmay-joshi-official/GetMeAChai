"use server"

import Razorpay from "razorpay";
import Payment from "../models/Payment";
import User from "../models/User";
import connectDB from "../db/connectDb";

export const initiate = async(amount, to_user, paymentfrom) => {
    await connectDB()
    var instance = new Razorpay({key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET})

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // Create a payment object which shows a pending payment in the database
    await Payment.create({order_id: x.id, amount: amount, to_user: to_user, name: paymentfrom.name, message: paymentfrom.message})

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({username: username}).lean()
    return JSON.parse(JSON.stringify(u))
}

export const fetchpayments = async (username) => {
    await connectDB()
    // Find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({to_user: username}).sort({amount: -1}).lean()
    return JSON.parse(JSON.stringify(p))
}