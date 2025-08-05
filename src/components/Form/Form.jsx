import React, { useState } from 'react'
import form1 from "../../assets/form1.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { API } from '../../../apis/Api';
 
const Form = () => {
  let navigate = useNavigate(); 
  let[form,setform] = useState({
    moodlevel:"",
    sleepHours:"",
    stressLevel:"",
    peerInfluence:"",
    dailyActivity:""

  });

const handelClick = async(event)=>{
  event.preventDefault();
  try {
    
    let res = await axios.post(API.userbehaviour,form,{
      withCredentials:true
    });
    console.log(res.data.message);
    toast.success("Form Submitted");
    navigate("/result");

    
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message)
    
  }
}

  return (
    <>
    <ToastContainer/>
     <div className='container mt-5 pt-5'>
        <h1 className='display-6 text-center mt-5 '>How Are You Feeling Today</h1>
        <p className="text-muted text-center">Let’s understand your manobhav... choose any number from 1 to 10.</p>

        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <img className='w-100' src={form1} alt="" />
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12 mt-5 pt-3'>
               <form action="" onSubmit={handelClick}>
                <span className=''>Mood Level : </span><input onChange={(event)=>setform({...form,moodlevel:event.target.value})} className='inputborder mx-5 shadow-sm w-25' type="number" name="moodlevel" id="" min="1" max="10" placeholder='1 to 10' required/><br /><br />
                <span className=''>Sleep Hours :</span><input onChange={(event)=>setform({...form,sleepHours:event.target.value})} className='inputborder mx-5 shadow-sm w-25' type="number" name="sleepHours" id="" min="1" max="10" placeholder='1 to 10'required/><br /><br />
                <span className=''>Stress Level :</span><input onChange={(event)=>setform({...form,stressLevel:event.target.value})} className='inputborder mx-5 shadow-sm w-25' type="number" name="stressLevel" id="" min="1" max="10" placeholder='1 to 10' required/><br /><br />
                <span className=''>PeerInfluence : </span><input onChange={(event)=>setform({...form,peerInfluence:event.target.value})} className='inputborder mx-4 shadow-sm w-25' type="number" name="peerInfluence" id="" min="1" max="10" placeholder='1 to 10' required/><br /><br/>
                <span className=''>DailyActivity : </span><input onChange={(event)=>setform({...form,dailyActivity:event.target.value})} className='inputborder1 shadow-sm' type="text" name="dailyActivity" id="" placeholder='ex.Yoga/Meditation'/><br />
               <p className='mx-'> <button className=' mx- mt-4  border w-50 p-1 footercolor rounded-2 shadow' type="submit"  to = "/result">Submit</button></p>
            </form></div>
        </div>
        </div> 
    </>
  )
}

export default Form
