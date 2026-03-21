"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const { data: session } = useSession()
  const [dropdown, setdropdown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setdropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='sticky w-full top-0 backdrop-blur-3xl text-white flex justify-between p-4 px-5 items-center z-50'>
      <Link href="/">
        <div className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-teal-400 font-bold text-xl">GetMeAChai</div>
      </Link>
      <div>
        <ul className='flex gap-4'>
          <div className="flex gap-4">
            {!session && <Link href="/login">
              <button className="cursor-pointer px-4 p-2 md:mr-5 mr-0 rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950 active:scale-100">Login</button>
            </Link>}
            {session && <div ref={dropdownRef} className="relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setdropdown(!dropdown)} className="cursor-pointer px-4 p-2 rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950 flex items-center gap-2">Profile <IoMdArrowDropdown /></button>
              <ul className={`options absolute top-12 mx-auto w-46 bg-slate-800 rounded-md shadow-lg dropdown-menu flex flex-col items-center ${dropdown ? 'block' : 'hidden'}`}>
                <li className="px-4 m-2 my-0 py-2 text-center">Signed in as {session.user.name}</li>
                <Link href="/dashboard"><li onClick={() => setdropdown(false)} className="rounded-lg m-2 my-0 px-11 py-2 hover:bg-slate-700 active:bg-slate-800 transition-all cursor-pointer">Dashboard</li></Link>
                <Link href={`/${session.user.name}`}><li onClick={() => setdropdown(false)} className="rounded-lg m-2 my-0 px-13 py-2 hover:bg-slate-700 active:bg-slate-800 transition-all cursor-pointer">My Page</li></Link>
                <li className="rounded-lg m-2 my-0 px-13 py-2 hover:bg-slate-700 active:bg-slate-800 transition-all cursor-pointer mb-2" onClick={() => { signOut(); setdropdown(false); }}>Sign Out</li>
              </ul>
            </div>}
            {session && <button className="cursor-pointer md:mr-2 px-4 p-2 rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950 active:scale-100" onClick={() => signOut()}>Sign out</button>}
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar