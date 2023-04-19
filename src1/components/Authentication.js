import React, {useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Authcontext=React.createContext()
var found=false

export const AuthenticationProvider = (props) => {
    var navigate=useNavigate()
    const[currentMentor,setCurrentmentor]=useState()
    const mentors=[
        {"Name":"SamJebadurai","Email":"samjebadurait.20cse@kongu.edu","Password":"qwerty","mentees":[],"Domain":"ArtificialIntelligence","Department":"Cse","Section":"D","Year":"3"},
        {"Name":"Flora","Email":"floara.20cse@kongu.edu","Password":"qwerty1","mentees":[],"Domain":"Machine Learning","Department":"Cse","Section":"C","Year":"3"},
        {"Name":"Mera","Email":"mera.20cse@kongu.edu","Password":"qwerty12","mentees":[],"Domain":"Deep Learning","Department":"Cse","Section":"C","Year":"3"},
        {"Name":"Scott","Email":"scott.20cse@kongu.edu","Password":"qwerty123","mentees":[],"Domain":"QuantumPhysics","Department":"Cse","Section":"C","Year":"3"}
    ]
    const menteeSignup=({user,password,fname,lname,regno,fathername,mothername,email,number,mentor,mentormail})=>{
        // const l=mentor.findIndex(x=>x.Name==mentor)
        for(let i of mentors){    
            if(i.Name===mentor){
                i.mentees=[...i.mentees,{"user":user,"password":password,"fname":fname,"lname":lname,"regno":regno,"fathername":fathername,"mothername":mothername,"email":email,"number":number,"mentor":mentor,"mentormail":mentormail}]
                alert(i.mentees[0].user)
            }
        }
    }
    const mentorLogin=({name})=>{
        for(let i of mentors){
            if(i.Name===name){
                found=true
                setCurrentmentor(name)
                navigate('/mymentees')
            }
        }
        if(!found){
            alert("Mentor name mismatched")
            found=false
        }
    }
  return (
    <div>
      <Authcontext.Provider value={{mentors,menteeSignup,mentorLogin,currentMentor}}>
        {props.children}
    </Authcontext.Provider>
    </div>
  )
}

export const useAuth=()=>{
    return useContext(Authcontext)
}


