import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const isUserExist = ()=>{
    return !!sessionStorage.getItem("current-user");
}
const Auth = ({children}) => {
    console.log("Auth called");
    
  return isUserExist() ? children : <Navigate to="/login"/>;

 
}
export default Auth
