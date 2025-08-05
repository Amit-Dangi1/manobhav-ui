import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginimg from "../../assets/login.jpg";
import axios from 'axios';
import { API } from '../../../apis/Api';
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {
  let naivigate = useNavigate();

  let[login,setlogin] = useState({email:"",password:""});

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try {
      let isLogin = await axios.post(API.login,login, {
  withCredentials: true
});
      console.log("login try = ",isLogin.data.user);
      toast.success(isLogin.data.message);
      sessionStorage.setItem("current-user",JSON.stringify(isLogin.data.user))

      setTimeout(()=>{
      naivigate("/");
      },5000)

      
    } catch (error) {
      console.log("login error = ",error);
      toast.error(error.response.data.message)
      
    }
  }

  return (
    <>
    <ToastContainer/>
      {/* <div className="d-flex justify-content-center align-items-center vh-100"> */}
        <div className="container p-4 vh-100 d-flex align-items-center">
        <div className='row w-100'>
           <div className='col-lg-6 col-md-6 d-flex flex-column justify-content-center rounded p-5 shadow'>
            <h3 className="mb-3">Welcome back!</h3>
            <p className="fw-bold">Enter your credentials to access your account</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input onChange={(event)=>setlogin({...login,email:event.target.value})} type="email" className="form-control" placeholder="Enter email" required/>
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input onChange={(event)=>setlogin({...login,password:event.target.value})} type="password" className="form-control" placeholder="Enter password" required/>
              </div>

              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="border p-1 rounded-2 signbackcolor text-white fw-bold">Login</button>
              </div>
            </form>

            <p className="mt-3 text-center">
              Don't have an account? <Link to="/signup">SignUp</Link>
            </p>
          </div>

          <div className='col-lg-6 col-md-6 d-flex align-items-center'>
            <img className='w-100 rounded' src={loginimg} alt="Login visual" />
          </div>

        </div>
      </div>
{/* </div> */}

    </>
  )
}

export default Login
