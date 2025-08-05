import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../../apis/Api';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';


 

const SignUp = () => {
  let navigate = useNavigate();
  let[user,setuser] = useState({
    name:"",
    email:"",
    age:"",
    password:""
  });
  const handelSubmit = async(e)=>{
    e.preventDefault()
     
     try {
    let response = await axios.post("http://localhost:3000/user/create",user);
    console.log("React Response = ",response);
    toast.success("SignUp Succefull...");
       setTimeout(()=>{
      navigate("/");
      },4000)
      
    } catch (error) {
      
        toast.error(error.response.data.message)
        console.log(error.response.data.message);
          
    }
  }
  return (
    <>
    <ToastContainer/>
  <div className="d-flex justify-content-center align-items-center vh-100">
        <div className='container'>
          <div className="row align-items-center justify-content-center">
            {/* Left Side - Form */}
            <div className='col-lg-6 border p-5 rounded-5 '>
              <form onSubmit={handelSubmit}>
                <h3 className="mb-4">Get Started Now</h3>

                <label className='bold'>Name</label><br />
                <input onChange={(event)=>setuser({...user,name:event.target.value})} type="text" placeholder='Enter your name' className="form-control mb-3"/>

                <label className='bold'>Email</label><br />
                <input onChange={(event)=>setuser({...user,email:event.target.value})} type="email" placeholder='Enter your email' className="form-control mb-3"/>

                <label className='bold'>Password</label><br />
                <input onChange={(event)=>setuser({...user,password:event.target.value})} type="password" placeholder='Enter your password' className="form-control mb-3"/>

                <label className='bold'>Age</label><br />
                <input onChange={(event)=>setuser({...user,age:event.target.value})} type="text" placeholder='Enter Age' className="form-control mb-3"/>

                <button type='submit' className=' border p-1 rounded-2 signbackcolor fw-bolder w-100 mb-3 text-white'>SignUp</button>

                <p className="text-center">Have an account? <Link to='/login'>Sign In</Link></p>
              </form>
            </div>

       
          </div>
        </div>
      </div>
 
    </>
  )
}

export default SignUp
