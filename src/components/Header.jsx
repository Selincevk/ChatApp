import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({user,room}) => {
  return (
    <header className='flex justify-between items-center border-gray-200 shadow-lg'>
       <div className='flex items-center gap-5'>
       <img src="/profile.jpg" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
       <p>{user.displayName} </p>
       </div>

        <p className='font-semibold'>{room} </p>
 <Link to="/room" className='btn'> Farklı Oda
</Link>
    </header>
  )
}

export default Header
