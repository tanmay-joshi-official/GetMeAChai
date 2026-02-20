"use client"

import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter()
    const { data: session } = useSession()
    if(session) {
        router.push("/dashboard")
    }
    return (<>
        <div className='flex flex-col'>
            <h2 className='text-3xl font-bold text-center text-white mt-20'>Login to GetMeAChai</h2>
            <div className="login-with flex flex-col gap-4 mt-10 items-center justify-center">
                <div className="google w-1/6 flex gap-3 items-center p-3 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 active:bg-gray-800 transition-all">
                    <FcGoogle className='w-7 h-7' />
                    <span className='text-white'>Login with Google</span>
                </div>
                <div className="linkedin w-1/6 flex gap-3 items-center p-3 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 active:bg-gray-800 transition-all">
                    <RiLinkedinFill className='w-7 h-7 text-blue-600 rounded-full' />
                    <span className='text-white'>Login with LinkedIn</span>
                </div>
                <div className="github w-1/6 flex gap-3 items-center p-3 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 active:bg-gray-800 transition-all" onClick={() => signIn("github")}>
                    <FaGithub className='w-7 h-7 bg-black text-white rounded-full' />
                    <span className='text-white'>Login with GitHub</span>
                </div>
                <div className="x w-1/6 flex gap-3 items-center p-3 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 active:bg-gray-800 transition-all">
                    <FaSquareXTwitter className='w-7 h-7 text-white rounded-full' />
                    <span className='text-white'>Login with X</span>
                </div>
            </div>
        </div>
    </>
    )
}

export default page