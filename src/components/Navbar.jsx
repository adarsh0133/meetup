import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 sm:p-5 sm:px-40">
        <h1 className='text-2xl font-medium'>meetup</h1>
        <div>
          <button className='mr-5 bg-zinc-300 rounded-md px-5 py-2'><Link to='/'>Home</Link></button>
          <button className='bg-zinc-300 rounded-md px-5 py-2'>ContactUs</button>
        </div>
      </div>
  )
}

export default Navbar