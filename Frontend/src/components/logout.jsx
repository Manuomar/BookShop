import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
  const [authUser,setAuthUser] = useAuth()
  const handleLogout=()=>{
    try{
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem('user')
      toast.success("LogOut Successful")
    
      setTimeout(()=>{
        window.location.reload();
      },400)
    }catch(error){
      toast.error("Error :"+error)
    }
  }
  return (
    <div>
      <button 
      className="bg-black  text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer ml-2"
      onClick={handleLogout}
      >
        LogOut
        </button>
    </div>
  )
}

export default Logout
