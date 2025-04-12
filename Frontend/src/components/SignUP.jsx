import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
const SignUP = () => {
  return (
    //   <>
    //   <div className='flex h-screen items-center justify-center'>
    // <div className='w-[600px]'>
    //     <div className='modal-box'>
    //         <form method='dialog'>
    //             <Link
    //             to='/' className='btn btn-sm btn-cicle btn-ghost absolute right-2 top-2'>X</Link>
    //         </form>
    //         <h3 className='font-bold text-lg'>Signup</h3>

    //     </div>

    // </div>
    //   </div>
      
    //   </>
    <div>
      
        <div className='flex h-screen items-center justify-center  '>
     <div className='w-[600]'>
         <div className=' bg-base-200 shadow-2xl p-10 rounded-md'>
           <form method=''>
                <Link
                to='/' className='btn bg-black text-amber-50  absolute right-150 top-50'>X</Link>
             </form>
             <h3 className='font-bold text-lg'>Signup</h3>
             <div className='mt-4 space-y-2'>
    <span>Name</span><br />
    <input type="text" placeholder='Enter Your FullName'
    className='w-80 px-3 py-1 border rounded-md outline-none' />
             </div>

             <div className='mt-4 space-y-2'>
    <span>Email</span><br />
    <input type="text" placeholder='Enter Your Email'
    className='w-80 px-3 py-1 border rounded-md outline-none' />
             </div>

             <div className='mt-4 space-y-2'>
    <span>Password</span><br />
    <input type="text" placeholder='Enter Your Password'
    className='w-80 px-3 py-1 border rounded-md outline-none' />
             </div>
             <div className='flex justify-around mt-8'>
               <button className='bg-pink-600 text-white rounded-md px-5 py-2.5 cursor-pointer hover:scale-105 duration-100'> Login</button>
               <p className='mt-4 ml-5'>
                 Have Account? 
                 <button onClick={()=>document.getElementById("my_modal_3").showModal()} className='text-blue-400 underline ml-2 cursor-pointer
                 '>Login</button><Login/>
               </p>
             </div>

       </div>

    </div>
       </div>
    </div>
  )
}

export default SignUP
