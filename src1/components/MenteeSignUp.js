import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Authentication'
import '../css/menteeSignUp.css'
export const MenteeSignUp=()=>
{
    const auth=useAuth()
    //const navigate=useNavigate();
    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
    const[Cpassword,setCpassword]=useState("")
    const[regno,setRegno]=useState("");
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");    
    const[fathername,setFathername]=useState("");
    const[mothername,setMothername]=useState("");
    const[email,setEmail]=useState("");
    const[number,setNumber]=useState("");
    const[mentor,setMentor]=useState("");
    const[mentormail,setMentormail]=useState("");
    const submit=()=>
    {
        if(password===Cpassword)
        {
        // setDetails([...details,{"user":user,"password":password,"fname":fname,"lname":lname,"regno":regno,"fathername":fathername,"mothername":mothername,"email":email,"number":number,"mentor":mentor,"mentormail":mentormail}])
        auth.menteeSignup({user,password,fname,lname,regno,fathername,mothername,email,number,mentor,mentormail})
        // navigate()
        }
        else
        {
            alert("Password didnot match");
        }
    }
    const clear=()=>
    {
        setUser("")
        setPassword("")
        setCpassword("")
        setFname("")
        setLname("")
        setRegno("")
        setFathername("")
        setMothername("")
        setEmail("")
        setNumber("")
        setMentor("")
        setMentormail("")
    }
    return(
        <div className='form'>
            <div className='form-body'>
                <div>
                    <label className='form__label' for='username'>USERNAME</label>
                    <input className='form_input' type={"text"} id="username" value={user} onChange={(e)=>setUser(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>PASSWORD</label>
                    <input className='form_input' type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>CONFIRM PASSWORD</label>
                    <input className='form_input' type={"password"} value={Cpassword} onChange={(e)=>setCpassword(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>FIRSTNAME</label>
                    <input className='form_input' type={"text"} value={fname} onChange={(e)=>setFname(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>LASTNAME</label>
                    <input className='form_input' type={"text"} value={lname} onChange={(e)=>setLname(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>REGNO</label>
                    <input className='form_input' type={"text"} value={regno} onChange={(e)=>setRegno(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>FATHER'S NAME</label>
                    <input className='form_input' type={"text"} value={fathername} onChange={(e)=>setFathername(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>MOTHER'S NAME</label>
                    <input className='form_input' type={"text"} value={mothername} onChange={(e)=>setMothername(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>EMAIL</label>
                    <input className='form_input' type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>MOBILE NUMBER</label>
                    <input className='form_input' type={'tel'} value={number} onChange={(e)=>setNumber(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>MENTOR NAME</label>
                    <input className='form_input' type={"text"} value={mentor} onChange={(e)=>setMentor(e.target.value)}></input><br/>
                </div>
                <div>
                    <label className='form__label'>MENTOR EMAIL</label>
                    <input className='form_input' type={"email"} value={mentormail} onChange={(e)=>setMentormail(e.target.value)}></input><br/>
                </div>
                
                
                <div>
                    
                    <button onClick={submit}>Submit</button>
                    <button type='reset' onClick={clear}>Reset</button>
                </div>
                
                </div>

        </div>
    );






}