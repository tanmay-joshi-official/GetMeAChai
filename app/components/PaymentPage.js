"use client"

import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from '../actions/useractions'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const { data: session } = useSession()
    const router = useRouter()

    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentuser, setCurrentuser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const paymentStatus = searchParams.get("paymentdone")

        if (paymentStatus === "true") {
            toast.success('Payment has been made!')
            setTimeout(() => router.replace(`/${username}`), 1500)
        }
    }, [searchParams, router, username])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setCurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const pay = async (amount) => {
        // Get the order ID
        let a = await initiate(amount, username, paymentform)
        let order_id = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID,
            "amount": amount,
            "currency": "INR",
            "name": "GetMeAChai",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order_id,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": "Tanmay Joshi",
                "email": "tanmay.joshi@example.com",
                "contact": "+91999XXXXXX"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            },
            "modal": {
                "ondismiss": function () {
                    // user closed/cancelled the modal
                    router.replace(`/${username}?paymentdone=false`)
                    toast.error('Payment cancelled.')
                    router.replace(`/${username}`)
                    setPaymentform({ name: "", message: "", amount: "" })
                }
            }
        }
        var rzp1 = new Razorpay(options);

        rzp1.on('payment.failed', function (response) {
            router.replace(`/${username}?paymentdone=false`)
            toast.error('Payment failed. Please try again.')
        })

        rzp1.open();
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className="cover relative">
                <img className='w-full h-64 object-cover' src={currentuser.cover} alt="cover" />
                <div className="profile absolute -bottom-12 left-[46.6%] w-24 h-24 rounded-full overflow-hidden border-2 border-white">
                    <img className='w-full h-full object-cover' src={currentuser.profile} alt="profile" />
                </div>
            </div>
            <div className="info flex flex-col items-center mt-16 gap-2">
                <h2>@{username}</h2>
                <div className='text-slate-400'>Full Stack Developer</div>
                <div className='text-slate-400'>1,719 members • 12 posts • $1,450/release</div>
            </div>
            <div className="content flex justify-center gap-20 my-10">
                <div className="supporters w-[40%] bg-slate-900 rounded-md shadow-2xl p-10 h-101 overflow-auto">
                    <h2 className='text-2xl font-bold text-center'>Supporters</h2>
                    <ul className="supporters-list flex flex-col items-center justify-center gap-4 mt-5">
                        {payments.length == 0 && <li>No payments yet</li>}
                        {payments.map((p, i) => {
                            return <li key={i} className='bg-gray-800 hover:bg-gray-700 active:bg-gray-800 cursor-pointer transition-all p-2 rounded-lg px-6 flex items-center gap-4 w-full'>
                                <img src={currentuser.profile} alt="profile" className="profile h-10 rounded-full border border-white" />
                                <div>{p.name} donated <span className='font-bold'>₹{p.amount / 100}</span> with a message "{p.message}"</div>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="payment w-[40%] bg-slate-900 rounded-md shadow-2xl p-10 flex flex-col justify-center h-1/2">
                    <h2 className='text-2xl font-bold text-center'>Make a Payment</h2>
                    <div className="payment-list flex flex-col items-center justify-center gap-4 mt-5">
                        <input type="text" onChange={handleChange} value={paymentform.name} name='name' placeholder='Enter Name' className='px-4 py-2 rounded-full bg-gray-800 text-white focus:outline outline-slate-500 w-full' />
                        <input type="text" onChange={handleChange} value={paymentform.message} name='message' placeholder='Enter Message' className='px-4 py-2 rounded-full bg-gray-800 text-white focus:outline outline-slate-500 w-full' />
                        <input type="text" onChange={handleChange} value={paymentform.amount} name='amount' placeholder='Enter Amount' className='px-4 py-2 rounded-full bg-gray-800 text-white focus:outline outline-slate-500 w-full' />
                        <button onClick={() => pay(paymentform.amount * 100)} className='px-4 py-2 w-1/4 cursor-pointer rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950 disabled:from-purple-950 disabled:to-teal-950 disabled:cursor-not-allowed' disabled={paymentform.name.length < 2 || paymentform.message.length < 2}>Pay</button>
                        <div className="predefined-amounts flex gap-4 mt-3">
                            <button className='px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800 cursor-pointer' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800 cursor-pointer' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800 cursor-pointer' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage