"use client"

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { updateProfile, fetchuser } from '../actions/useractions'

const Dashboard = () => {
  const { data: session, status, update } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  const getData = async () => {
    if(!session?.user?.name) return

    let u = await fetchuser(session.user.email)
    if(u){
      setform(u)
    }
  }

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
    else if(status === "authenticated"){
      getData()
    }
  }, [status])

  if (status === "loading") {
    return <div className='p-5'>Loading...</div>
  }

  if (!session) {
    return null
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateProfile(new FormData(e.target), session.user.name)
    update()
    alert("Profile updated")
    const targetUsername = form.username || session.user.name
    router.push(`/${targetUsername}`)
  }

  return (
    <>
      <div className="p-4">
        <div className=' text-center font-bold text-2xl'>Welcome to your dashboard, {session.user.name}!</div>
        <form className="dashboard-form items-center flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
          <input value={form.name ? form.name : ""} onChange={handleChange} className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Name' type="text" name="name" id="name" />
          <input value={form.email ? form.email : ""} onChange={handleChange} className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Email' type="text" name="email" id="email" />
          <input value={form.username ? form.username : ""} onChange={handleChange} className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Username' type="text" name="username" id="username" />
          <input value={form.profile ? form.profile : ""} onChange={handleChange} className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Profile Picture URL' type="text" name="profile" id="profile" />
          <input value={form.cover ? form.cover : ""} onChange={handleChange} className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Cover Picture URL' type="text" name="cover" id="cover" />
          <input value={form.razorpay_key_id ? form.razorpay_key_id : ""} onChange={handleChange} className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Razorpay Key ID' type="text" name="razorpay_key_id" id="razorpay_key_id" />
          <input value={form.razorpay_key_secret ? form.razorpay_key_secret : ""} onChange={handleChange} className='bg-gray-700 rounded-lg w-1/3 p-2 px-5 focus:outline outline-gray-500' placeholder='Enter Razorpay Key Secret' type="text" name="razorpay_key_secret" id="razorpay_key_secret" />
          <button className='px-4 py-2 mt-5 w-1/12 cursor-pointer rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950'>Save</button>
        </form>
      </div>
    </>
  )
}

export default Dashboard