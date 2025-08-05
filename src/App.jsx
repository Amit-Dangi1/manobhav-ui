import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Home/Header'
import Heal from './components/Home/Heal'
import Videos from './components/Home/Videos'
import Habits from './components/Home/Habits'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Result from './components/Result/Result'
import SignUp from './components/Authentication/SignUp'
import Login from './components/Authentication/Login'
import Auth from './components/Auth/Auth'
import ContactUs from './components/Home/ContactUs'
import About from './components/Home/About'

function App() {
 
  return (
    <>
     <Routes>
      <Route path='/' element={<><Header/> <Heal/> <Videos/> <Habits/> <Footer/></>}/>
      <Route path='/signup' element={<><SignUp/></>}/>
      <Route path='/login' element={<><Login/></>}/>
      <Route path='/contact' element={<><Auth><Header/> <ContactUs/> <Footer/></Auth></>}/>
      <Route path='/about' element={<><Header/><About/> <Footer/></>}/>
      <Route path='/form' element={<><Header/> <Auth><Form/></Auth> <Footer/></>}/>
      <Route path='/result' element={<><Header/> <Auth><Result/></Auth> <Footer/></>}/>
       {/* <Route path='/result' element={<><Result/></>}/> */}
     </Routes>
    </>
  )
}

export default App
