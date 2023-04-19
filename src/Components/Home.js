import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import '../Components/card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbars } from './Navbar';
function StudentHome() {
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
    const[details,setDetails]=useState([]);
    const[editflag,setEditflag]=useState(false);
    const[list,setList]=useState({});
    useEffect(()=>
    {
    axios.get("http://localhost:3500/details").then(
        (resp)=>
        {
            for(let i=resp.data.length-1;i>=0;i--)
            {
                if(resp.data[i].email===localStorage.getItem("uemail"))
                {
                    setUser(resp.data[i].user)
                    setPassword(resp.data[i].password)
                    setRegno(resp.data[i].regno)
                    setFname(resp.data[i].fname)
                    setLname(resp.data[i].lname)
                    setFathername(resp.data[i].fathername)
                    setMothername(resp.data[i].mothername)
                    setEmail(resp.data[i].email)
                    setNumber(resp.data[i].number)
                    setMentor(resp.data[i].mentor)
                    setMentormail(resp.data[i].mentormail)
                    setList(resp.data[i])
                    break;
                }
            }

        }
    ).catch((err)=>{console.log(err)})},[])
    console.log(list)
    // const l1=list.map((x,index)=><tr key={index}><td>{x.user}</td><td>{x.regno}</td></tr>)
    // const l1=list.map((x,index)=><tr key={index}><td>{x.user}</td><td>{x.regno}</td></tr>)

    const editProfile=(event)=>
    {
        const names=event.target.name
        const values=event.target.value
        setList({...list,[names]:values})
    }
    const saveProfile=()=>
    {
        setEditflag(!editflag)
        console.log(details)
    }
  return (
    <div>
      <Navbars/>
    <div className='carddiv'>
    <div className='carddiv1'>
    <Card className='styled-card'>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/326/326808.png" width={1000} />
      <Card.Body>
        <Card.Title>SEMESTER 1</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='carddiv1'>
    <Card className='styled-card'>
      <Card.Img variant="top"src="https://cdn-icons-png.flaticon.com/512/326/326808.png"  />
      <Card.Body>
        <Card.Title>SEMESTER 2</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='carddiv1'>
    <Card className='styled-card'>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/326/326808.png"/>
      <Card.Body>
        <Card.Title>SEMESTER 3</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='carddiv1'>
    <Card className='styled-card'>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/326/326808.png" />
      <Card.Body>
        <Card.Title>SEMESTER 4</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    <div className='carddiv'>
    <div className='carddiv1'>
    <Card className='styled-card'>
      <Card.Img variant="top"src="https://cdn-icons-png.flaticon.com/512/326/326808.png" />
      <Card.Body>
        <Card.Title>SEMESTER 5</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='carddiv1'>
    <Card className='styled-card'>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/326/326808.png"/>
      <Card.Body>
        <Card.Title>SEMESTER 6</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='carddiv1'>
    <Card className='styled-card'>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/326/326808.png" />
      <Card.Body>
        <Card.Title>SEMESTER 7</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='carddiv1'>
    <Card className='styled-card'>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/326/326808.png" />
      <Card.Body>
        <Card.Title>SEMESTER 8</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  </div>
  );

}

export default StudentHome;