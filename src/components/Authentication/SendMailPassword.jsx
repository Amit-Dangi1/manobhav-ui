import axios from 'axios';
import React, { useState } from 'react'
import { API } from '../../../apis/Api';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const SendMailPassword = () => {
    let [data, setdata] = useState({ email: "" ,password: "" });
 
    let navigate = useNavigate();

    
     const send1 = async (e) => {
      e.preventDefault();
        try {
            let res = await axios.post(API.sendmailforpassword, data);
            toast.success(res.data.message);
            // console.log("send mail per token = ",res.data.token);
             setdata({ email: "" ,password:""})

        } catch (error) {
            console.log("error message = ", error);
            toast.error(error.response.data.error ||"Something went wrong, try again!");
        }
    }
 

    return (
        <>
            <ToastContainer />
        <div className='d-flex justify-content-center align-items-center vh-100'>
  <div className='shadow-lg rounded-4 p-5' style={{ width: "400px", background: "white" }}>
    
    <h4 className="mb-2 fw-semibold text-center">Forgot your password?</h4>
    <p className="text-muted mb-4 text-center">
      Enter your registered email address and new password below. We will send you a link on your email to reset your password securely.
    </p>
<form onSubmit={send1}>
    <div className="d-flex flex-column text-center">
      <input onChange={(e)=>setdata({...data,email:e.target.value})}
        className='form-control border px-3 p-2 rounded-start-pill w-75'
        name='email'
        type='email'
        placeholder='Enter your email'
        value={data.email}
        required
      />
      <br />
          <input onChange={(e)=>setdata({...data,password:e.target.value})}
        className='form-control border px-3 p-2 rounded-start-pill w-75'
        name='password'
        type='password'
        placeholder='Enter your new password'
        value={data.password}
        required
      />
      <br />
      <button type='submit'
        className=' signbackcolor text-white border btn rounded-end-pill rounded-start-pill px-4'
      >
        Send
      </button>
    </div>
    </form>
      <button className='btn manobahv border bg-light fw-semibold mt-3' onClick={()=>{
        navigate("/")
      }}>Back</button>

  </div>
</div>

        </>
    )
}

export default SendMailPassword
