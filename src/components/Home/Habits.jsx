import React from 'react'
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import h4 from "../../assets/h4.png";
import h5 from "../../assets/h5.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import all from "../../assets/all.png";


const Habits = () => {
  return (
    <>
    <div className="text-center"><img className='w-75' src={all}/></div>
     <div className="container">
     <h1 className='text-center display-6 mb-5'>5 Daily Habits to Reduce Anxiety</h1>

     <div className='row'>
     <div className='col-lg-4 col-md-4 col-sm-12 text-center'>
        <img className='w-75 rounded-2 shadow ' src={h1}/><br />
        <h6 className='mt-2 text-shadow	'>~Morning Grounding Routine</h6>
        <p className='text-shadow	'>Start your day with a mindfulness practice <br /> to set a calm tone.</p>
     </div>

      <div className='col-lg-4 col-md-4 col-sm-12 text-center'>
        <img className='w-75 rounded-2 shadow' src={h2}/><br />
        <h6 className='mt-2 text-shadow	'>~Scheduled "Worry Time"</h6>
        <p className='text-shadow	'>Contain anxious thoughts by limiting  <br />  them to a fixed time. </p>
     </div>

      <div className='col-lg-4 col-md-4 col-sm-12 text-center'>
        <img className='w-75 rounded-2 shadow' src={h3}/><br />
        <h6 className='mt-2 text-shadow	'>~Move Your Body </h6>
        <p className='text-shadow	'>Exercise reduces cortisol (stress hormone) <br />  and boosts endorphins.</p>
     </div>

     
     </div>


      <div className='row mt-5'>
     <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
        <img className='w-50 rounded-2 shadow' src={h4}/><br />
        <h6 className='mt-2 text-shadow	'>~Digital Detox</h6>
        <p className='text-shadow	'>30-60 mins before bed: No screens. Try <br /> reading, herbal tea, or a warm shower.</p>
     </div>

      <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
        <img className='w-50 rounded-2 shadow' src={h5}/><br />
        <h6 className='mt-2 text-shadow	'>~Gratitude or Achievement Journal</h6>
        <p className='text-shadow	'>Shifts focus from "what  went wrong" <br/> to "what went well."</p>
     </div>    
     </div>
     </div> 
  
    </>
  )
}

export default Habits
