import React from 'react'
import { Link } from 'react-router-dom'
import SignUP from './SignUP'
const Login = () => {
  return (
    <div>
     <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-10'>
      {/* email input */}
      <label className='mt-40'>Email</label><br />
      <label class="input validator mt-3 mb-2"> 
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input type="email" placeholder="mail@site.com" required/>
</label>
<div class="validator-hint hidden">Enter valid email address</div>

{/* password input */}
<br /><label >Password</label><br/>
<label className="input validator  mt-3 mb-2">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
  <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
</label>
<p className="validator-hint hidden">
  Must be more than 8 characters, including
  <br/>At least one number
  <br/>At least one lowercase letter
  <br/>At least one uppercase letter
</p>

    </div>

      {/* Login button */}
<div className='flex justify-around mt-8'>
  <button className='bg-pink-600 text-white rounded-md px-5 py-2.5 cursor-pointer hover:scale-105 duration-100'> Login</button>
  <p className='mt-4'>
    Not Registered? <Link to='/signup' className='text-blue-400 underline '>Sign-Up</Link>
  </p>
</div>
  </div>

</dialog>


    </div>
  )
}

export default Login
