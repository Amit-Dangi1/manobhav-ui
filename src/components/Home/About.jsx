import React from 'react'
import about from "../../assets/about2.png";
import mern from "../../assets/mern.png";
import "./About.css"


const About = () => {
  return (
    <>
    <div className='container-fluid about1 justify-content-center align-content-center '><p className='text-center text-white display-6 font1 shadow-lg lead mt-5 p-3'>Start your journey to self-discovery and inner peace</p></div>
      <div className="container mt-5 pt-5 pb-5">
            <div className='container'><img className='w-100' src={mern}/></div>

  <h2 className="text-center mb-4">About Us</h2>
  <p className="lead text-center">
    <strong>Manobhav</strong> – Where Emotions Meet Intelligence
  </p>

  <p className="mt-4">
    At <strong>Manobhav</strong>, we believe that understanding one's emotions is the first step toward mental well-being and self-awareness. Our platform blends psychology with cutting-edge technology to provide users with intelligent mood predictions based on behavioral patterns like stress levels, sleep hours, and peer influence.
  </p>

  <p>
    Built using the powerful <strong>MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>, Manobhav is more than just a project — it's a mission to bridge the gap between human emotion and digital intelligence.
  </p>

  <p>
    With features like:
    <ul>
      <li>🧠 Real-time mood prediction based on recent behavioral data</li>
      <li>📊 Personalized suggestions to improve mental well-being</li>
      <li>💬 Emotion-driven visual feedback for user engagement</li>
      <li>🔐 Secure user data handling and token-based authentication</li>
    </ul>
  </p>

  <h5 className="mt-4">Why Manobhav?</h5>
  <p>
    Mental health is often ignored in our fast-paced digital world. Manobhav provides a private, user-friendly space to reflect, predict, and improve one's emotional state — using data, empathy, and simplicity.
  </p>

  <h5 className="mt-4">Our Vision</h5>
  <p>
    To empower individuals with insights into their emotional well-being using AI and behavioral analysis, and help them take meaningful steps toward a more balanced and happier life.
  </p>

 

  <p className="mt-5 text-center">
    Built with 💙 and code — for minds that matter.
  </p>
</div>

    </>
  )
}

export default About
