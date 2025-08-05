import tw from "../../assets/twitter_5968958.png";
import in1 from "../../assets/social_15455800.png";
import ins from "../../assets/instagram_1532461.png";

import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid border pt-5 footercolor text-dark  rounded-2 mt-5 pb-4">
        <div className="container pt-3 pb-5">      
            <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
               <Link   className="navbar-brand navbar-brand-custom mx-5 manobahv bg-light p-3 rounded-3" to="/">MANOBHAV</Link>
               <p className="mt-4">Your mental health journey matters – every small step counts.Your journey isn’t about speed; it’s about keeping going.</p>
               <p><a href=""><img className="social" src={tw} alt=""  /></a> <a href=""><img className="social"  src={in1} alt="" /></a>
               <a href=""><img className="social"  src={ins} alt=""  /></a></p></div>

               <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                <h6 className="fw-bolder">~Quick-Access Links~</h6>
                <ul>
                    <Link to="/" className="text-decoration-none text-dark"><li className="list-unstyled mt-4 fw-semibold">Home</li></Link>
                    <Link to="/about" className="text-decoration-none text-dark"><li className="list-unstyled mt-4 fw-semibold">About Us</li></Link>
                    <Link to="/contact" className="text-decoration-none text-dark"><li className="list-unstyled mt-4 fw-semibold">Contact Us</li></Link>
                </ul>
               </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                <h6 className="fw-bolder">~Legal~</h6>
                <ul>
                    <Link to="" className="text-decoration-none text-dark"><li className="list-unstyled mt-4 fw-semibold ">Privacy Policy</li></Link>
                    <Link to="" className="text-decoration-none text-dark"><li className="list-unstyled mt-4 fw-semibold">Terms of Service</li></Link>
                    <li className="list-unstyled mt-4 cursive">Your Privacy Matters</li>
                </ul>
               </div>
        </div>
        </div>

        <hr className="mx-5"/>
<div className="d-flex justify-content-between mx-5">
    <div className="mx-5">© 2025 MANOBHAV. All rights reserved</div>
    <div className="mx-5">Small habits, lifelong peace</div>
</div>
      </div>
    </>
  )
}

export default Footer
