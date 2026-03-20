"use client"

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { updateProfile, fetchuser } from '../actions/useractions'
import { toast } from 'react-toastify';

const Dashboard = () => {
  const { data: session, status, update } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [router, status])

  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.email) return

    const loadData = async () => {
      let u = await fetchuser(session.user.email)
      if (u) {
        setform(u)
      }
    }

    void loadData()
  }, [session?.user?.email, status])

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

    const formData = new FormData(e.target)
    const updatedUser = await updateProfile(formData, session.user.name)

    if (updatedUser?.error) {
      toast.error(updatedUser.error)
      return
    }

    await update()

    const targetUsername = formData.get('username') || session.user.name

    toast.success('Profile updated')

    setTimeout(() => {
      router.push(`/${targetUsername}`)
    }, 3500)
  }

  return (
    <>
      <div className="p-4">
        <div className=' text-center font-bold text-2xl'>Welcome to your dashboard, {session.user.name}!</div>
        <form className="dashboard-form container flex flex-col items-center gap-4 mt-8" onSubmit={handleSubmit}>
          {/* Enter label for each field on left side of the same line */}
          <div className='w-fit flex flex-col items-center'>
            <div className="form-group w-full flex flex-col gap-1 mt-3">
              <label htmlFor="name" className="block text-lg font-bold text-gray-300">Name</label>
              <input value={form.name ? form.name : ""} onChange={handleChange} className='bg-[#4649556b] border border-[#5c5c5d] rounded-lg p-2 px-5 focus:outline outline-gray-500 w-[30vw]' placeholder='Enter Name' type="text" name="name" id="name" />
            </div>
            <div className="form-group w-full flex flex-col gap-1 mt-3">
              <label htmlFor="email" className="block text-lg font-bold text-gray-300">Email</label>
              <input value={form.email ? form.email : ""} onChange={handleChange} className='bg-[#4649556b] border border-[#5c5c5d] rounded-lg p-2 px-5 focus:outline outline-gray-500 w-[30vw]' placeholder='Enter Email' type="text" name="email" id="email" />
            </div>
            <div className="form-group w-full flex flex-col gap-1 mt-3">
              <label htmlFor="username" className="block text-lg font-bold text-gray-300">Username</label>
              <input value={form.username ? form.username : ""} onChange={handleChange} className='bg-[#4649556b] border border-[#5c5c5d] rounded-lg p-2 px-5 focus:outline outline-gray-500 w-[30vw]' placeholder='Enter Username' type="text" name="username" id="username" />
            </div>
            <div className="form-group w-full flex flex-col gap-1 mt-3">
              <label htmlFor="profile" className="block text-lg font-bold text-gray-300">Profile Picture URL</label>
              <input value={form.profile ? form.profile : ""} onChange={handleChange} className='bg-[#4649556b] border border-[#5c5c5d] rounded-lg p-2 px-5 focus:outline outline-gray-500 w-[30vw]' placeholder='Enter Profile Picture URL' type="text" name="profile" id="profile" />
            </div>
            <div className="form-group w-full flex flex-col gap-1 mt-3">
              <label htmlFor="cover" className="block text-lg font-bold text-gray-300">Cover Picture URL</label>
              <input value={form.cover ? form.cover : ""} onChange={handleChange} className='bg-[#4649556b] border border-[#5c5c5d] rounded-lg p-2 px-5 focus:outline outline-gray-500 w-[30vw]' placeholder='Enter Cover Picture URL' type="text" name="cover" id="cover" />
            </div>
            <div className="form-group w-full flex flex-col gap-1 mt-3">
              <label htmlFor="razorpay_key_id" className="block text-lg font-bold text-gray-300">Razorpay Key ID</label>
              <input value={form.razorpay_key_id ? form.razorpay_key_id : ""} onChange={handleChange} className='bg-[#4649556b] border border-[#5c5c5d] rounded-lg p-2 px-5 focus:outline outline-gray-500 w-[30vw]' placeholder='Enter Razorpay Key ID' type="text" name="razorpay_key_id" id="razorpay_key_id" />
            </div>
            <div className="form-group w-full flex flex-col gap-1 mt-3">
              <label htmlFor="razorpay_key_secret" className="block text-lg font-bold text-gray-300">Razorpay Key Secret</label>
              <input value={form.razorpay_key_secret ? form.razorpay_key_secret : ""} onChange={handleChange} className='bg-[#4649556b] border border-[#5c5c5d] rounded-lg p-2 px-5 focus:outline outline-gray-500 w-[30vw]' placeholder='Enter Razorpay Key Secret' type="text" name="razorpay_key_secret" id="razorpay_key_secret" />
            </div>
          </div>
          <button className='px-4 py-2 mt-5 w-1/12 cursor-pointer rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950'>Save</button>
        </form>
      </div>
    </>
  )
}

export default Dashboard
