import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { auth } from '../firebase'
import { toast } from 'react-toastify'

const RoomPage = () => {
  const user = useOutletContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const room = e.target[0].value.toLowerCase().replaceAll(" ", "-")
    navigate(`/chat/${room}`)
  }

  const handleLogout = () => {
    signOut(auth)
    toast.info("Oturum Kapandı")
    navigate("/") //çıkış sonrası login sayfasına yönlendirme
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit} className='box rounded-[10px] flex flex-col gap-10 text-center'>
        <h1 className="text-4xl">Chat Odası</h1>
        <p className="text-zinc-500">
          Selam, {user.displayName}
          <br /> Hangi Odaya Gireceksiniz ?
        </p>
        <input placeholder='örn:Haftaiçi' type="text" className='border border-gray-300 p-2 px-4 rounded-md shadow-lg'
         />
         <button type='submit' className='btn bg-zinc-700 text-white'>Odaya Gir</button>

         <button type='button' onClick={handleLogout} className='btn bg-red-500 text-white'>Çıkış Yap</button>
      </form>
      
    </div>
  )
}

export default RoomPage
