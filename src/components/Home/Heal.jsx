import React from 'react';
import img1 from "../../assets/Home1.jpg";
import { Link } from 'react-router-dom';

const Heal = () => {
  return (
    <>
      <div className='container mt-5 pt-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h1 className='  display-5 fw-bold'>Heal. Grow. Thrive.</h1>
            
            <p className='mt-4 heal2 text-muted'>
              We believe mental health is just as vital as physical health. Whether you're battling stress, anxiety, depression, or simply striving for inner peace — we’re here to help you reconnect with your true self.
            </p>
            <p className='mt-3 text-muted'>
              Taking care of your mind is a journey, not a destination. Let’s embrace healing, self-discovery, and personal growth together.
            </p>

            <p className='you mt-4 lead'>
              You’re Not Alone. Let’s <br /> Talk, Heal, and Grow <br /> Together.
            </p>

                <Link className='btn btn-primary rounded-pill px-4 py-2 mt-3' to="/form">Let's Start</Link>
            
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 mt-4 mt-md-0'>
            <img className='w-100 rounded-4 shadow' src={img1} alt="Mental Health Support" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Heal;
