import React, { useState } from 'react'
import { useAuth } from './Authentication'
const Mentorlogin = () => {
    const auth=useAuth()
    const[name,setname]=useState("")
    const login=()=>{
        auth.mentorLogin({name})
    }
  return (
    <div>
      <input value={name} placeholder="Mentor Name" onChange={(e)=>setname(e.target.value)}></input><br/>
      <button onClick={login}>Log In</button>
    </div>
  )
}

export default Mentorlogin
