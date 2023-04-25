import React from 'react'
import './home.css'
import { NavLink } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (
    <>
    
      <nav>
        <div class="menu">
          <div class="logo">
            <a href="#">E - M e n t o r i n g</a>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">SignUp</a></li>
            {/* <li><NavLink to="/student">SignUp</NavLink></li> */}
          </ul>
        </div>
      </nav>
      <div class="img"></div>
          <div class="center">
            <div class="title">Easy way of mentoring</div>
            {/* <div class="sub_title">Dont lost your Data</div> */}
            <div class="btns">
              <button>Learn More</button>
              <button onClick={()=>navigate("/login")}>Log In</button>
          </div>
      </div>

    </>
  )
}

export default Home
