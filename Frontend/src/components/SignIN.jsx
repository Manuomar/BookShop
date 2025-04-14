// import React from 'react'
// import { useForm } from "react-hook-form"
// import {data, Link} from 'react-router-dom'
// import Login from './login'
// import axios from 'axios'
// const SignIN = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//       } = useForm()
    
//       const onSubmit = async(data) => {
//         const userInfo = {
//           Fullname :data.Fullname,
//           Email : data.Email,
//           Password : data.Password
//         }
//         await axios.post("http://localhost:3000/user/signup",userInfo)
//         .then((res)=>{
//           console.log(res.data);
//           if(res.data){
//             alert("Sign Up successful");
//           }
//         }).catch((err)=>{
//           console.log(err);
//           alert("Error :",err);
//         })
//       }
//       console.log(data)
    
//       console.log(watch("example")) 
//       // watch input value by passing the name of it

//       // connecting backend 
      
//   return (
//     <>
//     <div className='flex  justify-center items-center h-screen '>
//     <form onSubmit={handleSubmit(onSubmit)} className=''>
//       {/* register your input into the hook by invoking the "register" function */}
//       <div className='flex flex-col bg-base-200 p-6 rounded-md md:w-[400px] '>
//         <h1 className='font-bold text-xl flex justify-center items-center mb-6'>Sign UP
    
//         </h1>
//         <div className='absolute mx-70 '><Link to='/' className='mx-10  px-3 py-1 text-white bg-black rounded-xl'>X</Link></div>
//         <label className='font-semibold' > Full Name</label>
  
//       <label class="input validator mt-3 mb-2"> 
//   <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
//   <input type="Text"
//   name="Fullname"
//    placeholder="Full Name"
//     {...register("Fullname", { required: true })}
//     />
// </label>
// <div class="validator-hint hidden">Enter valid email address</div>     
     
//       {/* <input type='text' placeholder='Enter your Full Name'  {...register("FullName", { required: true })} className='border-2 mt-3'/> */}
     
     
//       <label className='font-semibold mt-2 mb-0'>Email</label>
//       <label class="input validator mb-2"> 
//   <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
//   ></path></g></svg>
//   <input type="email" 
//   name="Email"
//   placeholder="mail@site.com" 
//   {...register("Email", { required: true })}
//   />
// </label>
// <div class="validator-hint hidden">Enter valid email address</div>
//       {/* <input  type='text' placeholder='Enter your Email' {...register("Email", { required: true })} className='border-2 mt-3'/> */}
  
  
//     <label className='font-semibold mt-2 mb-0'>Password</label>
    
//       {/* <input type='password' placeholder='Password'{...register("Password", { required: true })} className='border-2 mt-3' /> */}
//       <label className="input validator  mt-3 mb-2">
//   <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
//   <input type="password" 
//     name="Password"
//    placeholder="Password"
//     minlength="8" 
//     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
//     title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" 
//     {...register("Password", { required: true })} />
// </label>
// <p className="validator-hint hidden">
//   Must be more than 8 characters, including
//   <br/>At least one number
//   <br/>At least one lowercase letter
//   <br/>At least one uppercase letter
// </p>
      
      
//       {(errors.Password ||errors.Fullname || errors.Email) && <span className='text-red-800'>*This field is required</span> }
   
//       <input type="submit" className=' bg-pink-500 px-3 py-2 rounded-2xl mt-5 text-white font-bold'/>
     
//       <p className='mt-4 ml-5'>
//                  Have Account? 
//                  <button onClick={()=>document.getElementById("my_modal_3").showModal()} className='text-blue-400 underline ml-2 cursor-pointer
//                  '>Login</button><Login/>
//                </p>
//       </div>
//     </form>
//     </div>
//     </>
//   )
// }
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './login.jsx';
import toast from 'react-hot-toast';

const SignIN = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
// naviagte to home after sign in
const location = useLocation();
const naviagte = useNavigate()
const from = location.state?.from?.pathname || "/" 
  const onSubmit = async (formData) => {
    const userInfo = {
      Fullname: formData.Fullname,
      Email: formData.Email,
      Password: formData.Password
    };

    try {
      const res = await axios.post("http://localhost:3000/user/signup", userInfo);
      console.log(res.data);
      if (res.data) {
        // alert("Sign Up successful");
        toast.success("Sign Up successful");
        localStorage.setItem("user",JSON.stringify(res.data.user));
        naviagte(from,{replace:true});
      }
    } catch (err) {
      if(err.response){
      console.error(err);
      // alert("Signup error: " + err.response.data.message);
      toast.error("Sign-Up error: " + err.response.data.message);
    }
  }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <div className='flex flex-col bg-base-200 p-6 rounded-md md:w-[400px] relative'>
          <h1 className='font-bold text-xl text-center mb-6'>Sign UP</h1>

          <Link to='/' className='absolute top-4 right-4 px-3 py-1 text-white bg-black rounded-xl'>
            X
          </Link>

          {/* Full Name */}
          <label className='font-semibold'>Full Name</label>
          <label className="input validator mt-3 mb-2">
            <input
              name="Fullname"
              type="text"
              placeholder="Full Name"
              {...register("Fullname", { required: true })}
            />
          </label>

          {/* Email */}
          <label className='font-semibold mt-2 mb-0'>Email</label>
          <label className="input validator mb-2">
            <input
              name="Email"
              type="email"
              placeholder="mail@site.com"
              {...register("Email", { required: true })}
            />
          </label>

          {/* Password */}
          <label className='font-semibold mt-2 mb-0'>Password</label>
          <label className="input validator mt-3 mb-2">
            <input
              name="Password"
              type="password"
              placeholder="Password"
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              {...register("Password", { required: true })}
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including:
            <br />• At least one number
            <br />• At least one lowercase letter
            <br />• At least one uppercase letter
          </p>

          {/* Validation Errors */}
          {(errors.Fullname || errors.Email || errors.Password) && (
            <span className='text-red-800'>*All fields are required</span>
          )}

          {/* Submit Button */}
          <input
            type="submit"
            value="Sign Up"
            className='bg-pink-500 px-3 py-2 rounded-2xl mt-5 text-white font-bold cursor-pointer'
          />

          {/* Login Section */}
          <div className="mt-4 ml-5">
            Have an Account?
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className='text-blue-400 underline ml-2 cursor-pointer'
            >
              Login
            </button><Login/>
          </div>
        </div>
      </form>

      {/* Login Modal
      <a className="bg-black  text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer ml-2"
    onClick={()=>document.getElementById("my_modal_3").showModal()}
    >LogIn</a><Login/> */}
    </div>
  );
};

export default SignIN;
