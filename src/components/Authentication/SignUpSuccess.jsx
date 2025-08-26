import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { API } from "../../../apis/Api";
const SignupSuccess = ({check1}) => {
  const navigate = useNavigate();


  let ss = async(e)=>{
    e.preventDefault();
    try {
        let res = await axios.get(API.signupsuccess);
        console.log(res.data.message);
        check1 = 1;
    } catch (error) {
        console.log(error);
        toast.error(error)
        check1=0;
        
    }
  }

  return (
    <>
    <ToastContainer/>
    {!check1?(<div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card shadow-lg p-5 text-center" style={{ maxWidth: "400px", borderRadius: "1rem" }}>
        
        {/* Success Icon */}
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="green"
            className="bi bi-check-circle-fill animate__animated animate__bounce"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03l4.146-4.147-.708-.708L6.97 9.617 5.646 8.293l-.708.707 2.032 2.03z"/>
          </svg>
        </div>

        {/* Heading */}
        <h2 className="mb-3 text-success">Sign Up Successful!</h2>

        {/* Description */}
        <p className="mb-4 text-muted">
          Your account has been created successfully. Welcome aboard! 🎉
        </p>

        {/* Button */}
        <button
          className="btn btn-success btn-lg w-100"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>

        <p className="mt-3 text-muted small">
          Thank you for joining us. Enjoy your journey!
        </p>
      </div>
    </div>):(<div className="display-5 mt-5 text-bg-danger ">SignUp Failed</div>)}
    
    </>
  );
};

export default SignupSuccess;
