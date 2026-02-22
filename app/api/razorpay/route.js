import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectDb";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)

    // Check if Razorpay order_ID is present in the server
    let p = await Payment.findOne({order_id: body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success: false, message: "Order ID not found"})
    }

    // Verify the payment
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, process.env.KEY_SECRET)

    if(xx){
        // Update the payment status
        const updatedPayment = await Payment.findOneAndUpdate({order_id: body.razorpay_order_id}, {done: true}, {new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    } else {
        return NextResponse.json({success: false, message: "Payment verification failed"})
    }
}