import axios from 'axios';
import React, { useState } from 'react'
import { API } from '../../../apis/Api';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { isUserExist } from '../Auth/Auth';

const ResetPassword = () => {
     
  return (
    <>
    <ToastContainer/>

        {/* {!check1?(<div className='mt-4 display-6 container'>This link is expire. Try again || Something went wrong</div>):(  <div className=" d-flex justify-content-center align-items-center vh-100">
      <div className="card reset-card shadow-lg p-4">
        <h4 className="text-center mb-3 text-primary fw-bold">
           Reset Password
        </h4>
        <p className="text-muted text-center">Enter your new password below</p>

        <form onChange={handelSubmit}>
           <div className="mb-3">
            <input
              value={password.password}
              onChange={(e)=>setpassword({...password,password:e.target.value})}
              type="password"
              className="form-control form-control-lg"
              placeholder="New Password"
              required
            />
          </div>
 
          
          <button type="submit" className="btn signbackcolor text-white">
            Update Password
          </button>
        </form>
      </div>
    </div>)} */}
     </>
  )


}

export default ResetPassword
