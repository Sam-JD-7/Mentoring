import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import './LoginPage.css'
import axios from'axios'
import './home.css'

function LoginPage() {

  const navigate=useNavigate();
  const [err,setErr]=useState('')
  const [isClicked, setIsClicked] =useState(false)
  const [uemail,setUemail]=useState("")
  const [validKonguMail,setValidKonguMail]=useState(false)
  const [validEmail,setValidEmail]=useState(false)
  const [phFocus,setPhFocus]=useState(false)
  const[upwd,setUpwd]=useState("")
  const [email,setEmail]=useState("")
  const [pwd,setPwd]=useState("");
  const [validPwd,setValidPwd]=useState(false)
  const KONGUMAIL_REGEX=/^([a-z]+\.+\w+(@kongu\.edu))$/;
  const EMAIL_REGEX =/^([a-z]+(@gmail\.com))$/ ;
  const handleAdminSubmit=async (e)=>{
    e.preventDefault();
    localStorage.setItem("email",email)
        navigate('/mentorhome')
}
  const handleUserSubmit=(e)=>
  {
    axios.get("http://localhost:3002/student/login",{params:{email:uemail,password:upwd}})
    .then(response=>
      {
      navigate('/semester')
      })
      .catch(err=>
        {
          alert(err.response.data)
        })
    e.preventDefault();
    localStorage.setItem("uemail",uemail);
  }

  return (
    <div className='img'>
<article> 
     <div className='Login_Page'>
 
      <div className={isClicked ? "container1 right-panel-active" : "container1"} >
        <div className="form-container sign-up-container">

          <form className='sign_up_form' onSubmit={handleAdminSubmit}>

            <h1 className='text_admin'>Mentor Login</h1>

            <br></br><br></br>
            <input 
              className='input__field'
              type="email" 
              placeholder="Email"  
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              aria-describedby="rollnum-note"
            />
            <input 
              className='input__field'
              type="password" 
              placeholder="Password" 
              value={pwd}
              onChange={(e)=>{setPwd(e.target.value);}}
            />
            <br></br><br></br>
            
            
            <button id='sign_in_button_yellow_'type='submit'>Log In</button>
            <p id="ph-input" className={err ? "instructions" : "offscreen"}>                
                <span id='small_text'>Id or Password is wrong!</span> 
            </p>

          </form>

        </div>

        <div className="form-container sign-in-container">

          <form className='sign_in_form' >

            <h1 className='text_sign_in'>Student Login</h1>
            <br></br>
            <br></br>
         
            <input 
              className='input__field'
              type="email" 
              placeholder="Email" 
              value={uemail}
              onChange={(e)=>{
                setUemail(e.target.value);
                
              }}
              onFocus={() => setPhFocus(true)}
              onBlur={() => setPhFocus(false)}
            />
<input 
              className='input__field'
              type="password" 
              placeholder="password" 
              value={upwd}
              onChange={(e)=>{
                setUpwd(e.target.value);
                
              }}
              onFocus={() => setPhFocus(true)}
              onBlur={() => setPhFocus(false)}
            />
            <br></br>
            <button onClick={handleUserSubmit} id='sign_in_button_yellow' >Sign In</button>
            <br></br>
            <button id='sign_in_button_yellow' onClick={()=>navigate("/student")}>create</button>

          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='text_admin_panel'>Are You a Student?...</h1>
              <button className="ghost user" onClick={() => { setIsClicked(false) }}>LOGIN</button>
            </div>
            <div className="overlay-panel overlay-right">
              <p className='text_moto'>Are you a Mentor?...</p>
              <button className="ghost admin" onClick={() => { setIsClicked(true) }}>LOGIN</button> </div>
          </div>
        </div>
      </div>

      
    </div>
    </article>
    </div>


  )
}

export default LoginPage