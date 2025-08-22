import React from 'react'
import { Link } from 'react-router-dom'
import mtracking from "../../assets/mtracking.jpg";
import excersice from "../../assets/excersice.jpg"
 import journal from "../../assets/journal.jpg";


const Feature2 = () => {
  return (
    <>
    <div className='text-center mt-5 pt-5 '>
        <h3 className='display-5'>Features That Transform Your Mental Wellness Journey</h3>
        <p className='lead'>Discover tools and features designed to support your mental health and emotional well-being</p>
    </div>
      <div className='container mt-5 pt-5'>
        <div className='row'>
            <div className='col-lg-4 col-md-6 ' >
                <Link className='text-decoration-none' to="/moodtracking">
                <div className="card p-5 shadow mt-3">
  <img className="card-img-top w-25" src={mtracking} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Mood Tracking</h4>
    <p className="card-text">Track your emotional patterns and gain insights into your mental well-being journey.</p>
   
  </div>
</div>
                </Link>
            </div>
              <div className='col-lg-4 col-md-6  '>
                <Link className='text-decoration-none' to="/journal">
                <div className="card p-5 shadow mt-3" >
  <img className="card-img-top w-25"  src={journal} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Daily Journal</h4>
    <p className="card-text">Document your thoughts and feelings with guided journaling prompts.</p>
   
  </div>
</div>
                </Link>
            </div>

              <div className='col-lg-4 col-md-6   '>
                <Link className='text-decoration-none' to="/exercise">
                <div className="card p-5 shadow mt-3">
  <img className="card-img-top w-25" src={excersice} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Instant Exercises</h4>
    <p className="card-text">Quick stress-relief techniques and breathing exercises for immediate calm.

.</p>
   
  </div>
</div>
                </Link>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Feature2
