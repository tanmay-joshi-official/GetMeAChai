"use client"

import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
  
  return (
    <nav className='sticky w-full top-0 backdrop-blur-3xl text-white flex justify-between p-4 px-5 items-center z-50'>
      <Link href="/">
        <div className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-teal-400 font-bold text-xl">GetMeAChai</div>
      </Link>
      <div>
        <ul className='flex gap-4'>
          <div className="flex gap-4">
            <Link href="/login">
              <button className="cursor-pointer px-4 p-2 rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950">Login</button>
            </Link>
            {session && <Link href="/dashboard">
              <button className="cursor-pointer px-4 p-2 rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950">Dashboard</button>
            </Link>}
            {session && <button className="cursor-pointer px-4 p-2 rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950" onClick={() => signOut()}>Sign out</button>}
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar