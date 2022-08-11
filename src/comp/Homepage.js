import { onAuthStateChanged, signOut } from 'firebase/auth'
import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'

import {auth} from "../firebase-config"

const Homepage = () => {
    const [user,setUser] = useState({})
    const navigate = useNavigate()
  onAuthStateChanged(auth,(currentuser)=>{
    setUser(currentuser)
    // console.log(auth.currentUser.email)
  })
  const handlelogout = async () => {
    try {
        await signOut(auth)
        navigate("/")
        
    } catch (error) {
        console.log(error.message)
    }
  }
   
  return (
      <div>Current UserLogged In:
        <br/>
        {
            user.email
        }
        <br/>
      <button type='button' onClick={handlelogout}>Logout</button>
      </div>
      
  )
}

export default Homepage