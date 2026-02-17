"use client"

import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
  if(session){
    return <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
    </>
  }

  return (
    <nav className='fixed w-full top-0 backdrop-blur-3xl text-white flex justify-between p-4 items-center'>
      <Link href="/">
        <div className="logo font-semibold text-lg cursor-pointer">GetMeAChai</div>
      </Link>
      <div>
        <ul className='flex gap-4'>
          {/* <li className='cursor-pointer font-medium'>Home</li>
                <li className='cursor-pointer font-medium'>About</li>
                <li className='cursor-pointer font-medium'>Projects</li>
                <li className='cursor-pointer font-medium'>Sign Up</li>
                <li className='cursor-pointer font-medium'>Login</li> */}
          <div className="flex gap-4 mt-4">
            <Link href="/login">
              <button className="cursor-pointer px-4 p-2 rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950">Login</button>
            </Link>
            <button className="cursor-pointer px-4 p-2 rounded-full bg-linear-to-r  from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950">Sign Up</button>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar