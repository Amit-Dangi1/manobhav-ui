import React from 'react'
import Cookies from 'js-cookie';

import { Link, useNavigate } from 'react-router-dom'
import { API } from '../../../apis/Api';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const Header = () => {
    const navigate = useNavigate();
    const isUserExit = ()=>{
        console.log(sessionStorage.getItem("current-user"));
        
        return !!sessionStorage.getItem("current-user");
    }
    const logout = async()=>{
        try {
        let log = await axios.get(API.logout,{
           withCredentials:true 
        })
        Cookies.remove('token');
        sessionStorage.getItem("current-user","");
        sessionStorage.clear();
        navigate("/");     
        } catch (error) {
            toast.error(error.log.message)
        }
       
    }
  return (
    <>
    <ToastContainer/>
    <nav className="navbar navbar-expand-lg bg-light fixed-top   ">
        <div className="container-fluid pt-2 pb-2 ">
            
            <Link className="navbar-brand navbar-brand-custom mx-5 manobahv" to="/">MANOBHAV</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link me-5 nav-link-custom " to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5 nav-link-custom " to="/about">About</Link>
                    </li>
                        <li className="nav-item">
                        <Link className="nav-link me-5 nav-link-custom " to="/features">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  me-5nav-link-custom me-5 " to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mt-2 mt-lg-0 me-5">
                      {!isUserExit()?<><button className="btn btn-signup-custom btn1 rounded-5 me-5" type="button"><Link className='text-dark   text-decoration-none ' to="/signup">Sign Up</Link></button><button className="btn btn-login-custom btn1 rounded-5  me-5" type="button"><Link className='text-dark text-decoration-none' to="/login">Login</Link></button></> 
                                    :<button onClick={logout} className="btn btn-login-custom btn1 rounded-5  me-5" type="button">SignOut</button>
}  
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header
