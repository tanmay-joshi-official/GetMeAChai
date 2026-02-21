"use client"

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <div className='p-5'>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <>
      <div className="p-4">
        <div className=' text-center font-bold text-2xl'>Welcome to your dashboard, {session.user.name}!</div>
        <div className="dashboard-form items-center flex flex-col gap-4 mt-8">
          <input className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Name' type="text" name="name" id="name" />
          <input className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Email' type="text" name="email" id="email" />
          <input className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Username' type="text" name="username" id="username" />
          <input className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Profile Picture URL' type="text" name="profile" id="profile" />
          <input className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Cover Picture URL' type="text" name="cover" id="cover" />
          <input className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Razorpay Key ID' type="text" name="razorpay_key_id" id="razorpay_key_id" />
          <input className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Razorpay Key Secret' type="text" name="razorpay_key_secret" id="razorpay_key_secret" />
          <button className='px-4 py-2 mt-5 w-1/12 cursor-pointer rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950'>Save</button>
        </div>
      </div>
    </>
  )
}

export default Dashboard