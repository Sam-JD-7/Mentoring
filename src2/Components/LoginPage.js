import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import './LoginPage.css'
import axios from'axios'

// import fc from './food_court.jpg'

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
  // const [validEmail,setValidEmail]=useState(false)

  const [pwd,setPwd]=useState("");
  const [validPwd,setValidPwd]=useState(false)


  // const [isLogin,setIsLogin]

  const KONGUMAIL_REGEX=/^([a-z]+\.+\w+(@kongu\.edu))$/;
  const EMAIL_REGEX =/^([a-z]+(@gmail\.com))$/ ;

  const handleAdminSubmit=async (e)=>{

    e.preventDefault();
    localStorage.setItem("email",email);
    // try{
    //   const responce= await axios.post(
    //     "http://localhost:8080/login",
    //     JSON.stringify(
    //       {"email":email,"password":pwd}
    //     ),
    //     {
    //       headers:{'Content-Type':'application/json'}
    //     }
    //   )
    //   console.log(JSON.stringify(responce));
    //   if(responce.data==="Invalid password")
    //   {
    //     setErr("Invalid password");
    //     // localStorage.setItem('jwt','');

        
    //   }
    //   else
    //   {
    //   localStorage.setItem('jwt',responce.data);

        navigate('/mentorhome')
//       }
//   }
//   catch(err){

//   }
}

  const handleUserSubmit=(e)=>
  {
    e.preventDefault();

    localStorage.setItem("uemail",uemail);

    // axios.get("http://localhost:3500/details").then(
    //     (resp)=>
    //     {
    //         for(let i=resp.data.length-1;i>=0;i--)
    //         {
    //             if(resp.data[i].user===localStorage.getItem("user"))
    //             {
    //                 setList((prev)=>[...prev,resp.data[i]])
    //             }
    //         }
    //     }
    // ).catch((err)=>{console.log(err)})},[])
    // if((KONGUMAIL_REGEX.test(ph)) || (EMAIL_REGEX.test(ph)))
    // {
    //   localStorage.setItem("ph",ph);
   
    
     navigate('/mentee')
    // } 
  }

//   useEffect(() => {
//     setValidKonguMail(KONGUMAIL_REGEX.test(ph));
//     setValidEmail(EMAIL_REGEX.test(ph))
//   }, [ph])
  

  return (
<article> 
     <div className='Login_Page'>
 
      <div className={isClicked ? "container right-panel-active" : "container"} >
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
              // aria-invalid={validRollNum ? "true" : "false"}
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
            //   aria-invalid={(validKonguMail || validEmail )? "true" : "false"}
            //   aria-describedby="ph-input"
              onFocus={() => setPhFocus(true)}
              onBlur={() => setPhFocus(false)}
            />

            {/* <p id="ph-input" className={phFocus && ph && !validKonguMail && !validEmail ? "instructions" : "offscreen"}>                
                <span id='small_text'>Use your Email Id</span> 
            </p> */}
<input 
              className='input__field'
              type="phone" 
              placeholder="password" 
              value={upwd}
              onChange={(e)=>{
                setUpwd(e.target.value);
                
              }}
            //   aria-invalid={(validKonguMail || validEmail )? "true" : "false"}
            //   aria-describedby="ph-input"
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
              {/* <p className='one one_one'>Only for KEC admin</p><br></br> */}
              <button className="ghost user" onClick={() => { setIsClicked(false) }}>LOGIN</button>
            </div>
            <div className="overlay-panel overlay-right">
              <p className='text_moto'>Are you a Mentor?...</p>
              {/* <p className='one one_two'>Are you a Mentor?...</p> */}
              {/* <img src={fc} style={{"height":"200px"}}/> */}
              <button className="ghost admin" onClick={() => { setIsClicked(true) }}>LOGIN</button>            </div>
          </div>
        </div>
      </div>

      
    </div>
    </article>


  )
}

export default LoginPage
