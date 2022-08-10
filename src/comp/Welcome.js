import React from "react";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
const navigate = useNavigate()
const handlelogin = () => {
navigate("./login")
}
const handlesignup = () => {
    navigate("./signup")
}
  return <div> 
    Welcome Page
    <button onClick={handlelogin}>Login</button>
    <button onClick={handlesignup}>Signup</button>
    </div>;
};

export default Welcome;
