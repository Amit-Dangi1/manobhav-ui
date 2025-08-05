import React, { useEffect, useState } from 'react'
import Header from "./Header";
import contact from "../../assets/contact2.png";
import contact22 from "../../assets/contact22.jpg";
import email from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import instagram from "../../assets/instagram_1532461.png";
import twitter from "../../assets/twitter_5968958.png";
import linkdin from "../../assets/social_15455800.png";

import "./Contact.css"
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { API } from '../../../apis/Api';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  let[contact,setcontact] = useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  });

  const handleContact = async(event)=>{
    event.preventDefault();

try {
  let res  = await axios.post(API.contact,contact,{
        withCredentials:true
})
// console.log(res.data);
toast.success(res.data.message)
} catch (error) {
  console.log(error);  
  toast.error(error.response.data.message)
}

  }
 
  return (
    <>
    <ToastContainer/>
<div
  className='w-100 backimg lead mt-5 pt-5 d-flex justify-content-center align-items-center'>
  <p className='text-white text-center fw-bold '>
    We're here to answer your questions and help you get started
  </p>
</div>      <div className="container mt-5 pt-5 pb-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      
      <p className="text-center mb-5">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello —
        feel free to reach out.
      </p>

      <div className="row">
              <div className="col-md-6 mt-4 mt-md-0">
             <img className='w-100' src={contact22}/>
        </div>
         <div className="col-md-6 shadow-lg p-5 rounded-3 ">
          <form onSubmit={handleContact}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" onChange={(event)=>setcontact({...contact,name:event.target.value})} className="form-control" id="name" name='name' required placeholder="Enter your full name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" onChange={(event)=>setcontact({...contact,email:event.target.value})} className="form-control" id="email" name='email' required placeholder="Enter your email address" />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" onChange={(event)=>setcontact({...contact,subject:event.target.value})} className="form-control" id="subject" name='subject' required placeholder="What's your message about?" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" onChange={(event)=>setcontact({...contact,message:event.target.value})} id="message" rows="5" name='message' required placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="border p-2 mt-5 rounded-2 signbackcolor w-100">Send Message</button>
          </form>
        </div>

   
      </div>
    </div>
    <div className='container p-3 bg-light shadow rounded-bottom-pill mt-5 pb-5'>
            <h5 className='text-center lead'>Contact Information</h5>
      <div className='row text-center mt-5'>
       <div className='col-md-4'>
        <img className='icons' src={email} alt="" />
        <p className='mt-2'><strong>Email:</strong> support@manobhav.in</p>
       </div>

       
       <div className='col-md-4'>
      <img className='icons' src={phone} alt="" />
<p className='mt-2'><strong>Phone:</strong> +91 9876543210</p></div>

       
       <div className='col-md-4 '>
          <img className='icons' src={location} alt="" />
          <p className='mt-2'><strong>Location:</strong> Indore, Madhya Pradesh, India</p>
       </div>
      </div>
 
{/* <div className='row text-center'>
    <h5 className="mt-4 text-center lead mb-2">Follow Us</h5>
  <div className='col-md-4 mt-2'><Link to=""><img className='icons ' src={instagram} alt="" /></Link></div>

       
  <div className='col-md-4 mt-2'><Link to=""><img className='icons' src={twitter} alt="" /></Link></div>

       
  <div className='col-md-4 mt-2'><Link to=""><img className='icons' src={linkdin} alt="" /></Link></div>

</div> */}

    </div>
        
          

      
                </>
  )
}

export default ContactUs
