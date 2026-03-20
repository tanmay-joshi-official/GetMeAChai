"use server"

import Razorpay from "razorpay";
import Payment from "../models/Payment";
import User from "../models/User";
import connectDB from "../db/connectDb";

export const initiate = async (amount, to_user, paymentfrom) => {
    await connectDB()
    let user = await User.findOne({username: to_user})
    const secret = user.razorpay_key_secret
    var instance = new Razorpay({ key_id: user.razorpay_key_id, key_secret: secret })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // Create a payment object which shows a pending payment in the database
    await Payment.create({ order_id: x.id, amount: amount, to_user: to_user, name: paymentfrom.name, message: paymentfrom.message })

    return x
}

export const fetchuser = async (identifier) => {
    await connectDB()
    const query = identifier && identifier.includes("@") ? { email: identifier } : { username: identifier }
    let u = await User.findOne(query).lean()
    return u ? JSON.parse(JSON.stringify(u)) : null
}

export const fetchpayments = async (username) => {
    await connectDB()
    // Find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean()
    return JSON.parse(JSON.stringify(p))
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)
    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists." }
        }
        await User.updateOne({email: ndata.email}, ndata)
        // Now update all the usename in the payments table 
        await User.updateMany({to_user: oldusername}, {to_user: ndata.username})
    }
    else{
        await User.updateOne({ username: oldusername }, { $set: ndata })
    }
}   