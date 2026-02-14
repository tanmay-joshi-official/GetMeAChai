import React from 'react'

const Navbar = () => {
  return (
    <nav className='backdrop-blur-3xl text-white flex justify-between p-4'>
        <div className="logo font-semibold text-lg cursor-pointer">GetMeAChai</div>
        <div>
            <ul className='flex gap-4'>
                <li className='cursor-pointer font-medium'>Home</li>
                <li className='cursor-pointer font-medium'>About</li>
                <li className='cursor-pointer font-medium'>Projects</li>
                <li className='cursor-pointer font-medium'>Sign Up</li>
                <li className='cursor-pointer font-medium'>Login</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar