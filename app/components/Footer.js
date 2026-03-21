import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='backdrop-blur-3xl text-white flex justify-center p-4 font-medium text-center'>
        <div>Copyright &copy; {currentYear} GetMeAChai All rights reserved!</div>
    </footer>
  )
}

export default Footer