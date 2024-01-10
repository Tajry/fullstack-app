import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const handlelogout = ()=>{
    localStorage.removeItem('token')
    window.location = '/login'
  }


  return (
    <div className='navbar w-full mb-5 flex justify-between border-b-2 shadow-md px-4'>
        <div className='p-3'>
          <Link to={'/'} className='m-2 p-2 text-sky-300'>ManageEmployee</Link>
          <Link to={'/'} className='m-2 p-2 text-zinc-400'>All Employee</Link>
          <Link to={'/add'} className='m-2 p-2 text-white bg-green-600 rounded-md hover:bg-amber-300'>Add</Link>
        </div>
        <div className='flex items-center'>
            <button onClick={handlelogout}>Logout</button>
        </div>
       
    </div>
  )
}

export default Navbar