import React, { useEffect, useState } from 'react';
import smile from "../../assets/smile.png";
import meditate from "../../assets/meditate.jpg";
import axios from 'axios';
import { API } from '../../../apis/Api';


const Result = () => {
  let[predict,setpredict] = useState({});

  let getPredict = async()=>{
    let res = await axios.get(API.response,{
      withCredentials: true
    });
    setpredict(res.data.findmood)
    console.log("RESPONSE RESULT PAGE = ",res.data.findmood);
    // setpredict(res.data);
     
  }
  useEffect(()=>{
    getPredict()
  },[]);
console.log("Predict = ",predict);

  return (
    <>
    <div className='mt-5 pt-5'></div>
      <div className='container pt-5 mt-5 pb-5   shadow rounded-3'>
        <p  className='text-center  pt-4 pb-4'><span className='predcolor  px-4 pt-1 pb-1 rounded-2  text-white'>Prediction Card</span> </p>
         <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
                <img className='emoji' src={smile} alt="" srcset="" /><br />
                <p className='  mx-5 text-center pt-2 pb-2 message rounded-3 text-white mt-5'>~ {predict.quote} ~</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <p className='lead'>HappinessIndex : <span className='text-success fw-bold'>{predict.moodlevel}</span></p>
                <p className='fw-semibold'>Suggestions for Improvement</p>
                <ul>
                    <li className='maintain mt-4'>Feeling : {predict.feeling}</li>
                    <li className='maintain mt-3'>{predict.suggestions}</li>
                    <li className='maintain mt-3'>{predict.activity}</li>
                </ul>
            </div>
        </div>
      </div>
        <h1 className='display-6 text-center mt-5 pt-5'>"Your balanced energy invites harmony into your life."</h1>
      <img className='w-100     ' src={meditate} alt="" srcset="" />
    </>
  )
}

export default Result
