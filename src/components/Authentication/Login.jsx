import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginimg from "../../assets/login.jpg";
import axios from 'axios';
import { API } from '../../../apis/Api';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email:"", password:"" });

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const isLogin = await axios.post(API.login, login, { withCredentials: true });
      toast.success(isLogin.data.message);
      sessionStorage.setItem("current-user", JSON.stringify(isLogin.data.user));

      setTimeout(() => {
        navigate("/");
      }, 5000);

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  }

  return (
    <>
      <ToastContainer />
      
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center align-items-center">
          
          {/* Form Column */}
          <div className="col-lg-6 col-md-8 d-flex flex-column justify-content-center rounded p-5 shadow">
            <h3 className="mb-3">Welcome back!</h3>
            <p className="fw-bold">Enter your credentials to access your account</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={login.email}
                  onChange={(e)=>setLogin({...login, email:e.target.value})}
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={login.password}
                  onChange={(e)=>setLogin({...login, password:e.target.value})}
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="border p-1 rounded-2 signbackcolor text-white fw-bold">Login</button>
              </div>
            </form>

            <p className="mt-3 text-center">
              Don't have an account? <Link to="/signup">SignUp</Link>
            </p>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
            <img src={loginimg} alt="Login visual" className="w-100 rounded" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Login;
