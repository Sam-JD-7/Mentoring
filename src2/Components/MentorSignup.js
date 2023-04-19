import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export const Mentor=()=>
{
    const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const click=()=>
    {
        localStorage.setItem("email",email);
        navigate("/home")
    }
    return(
        <div>
            <div>
            <label>Email</label>
            <input type="email" onChange={(e=>setEmail(e.target.value))}></input>
            </div>
            <div>
            <label>Password</label>
            <input type="email" onChange={(e=>setPassword(e.target.value))}></input>
            </div>
            <button onClick={click}>Login</button>
        </div>
    );
}