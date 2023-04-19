import React, { useEffect, useState } from "react";
import axios from 'axios';
import './style.css'
import './mymentees.css'
import { Navbars } from "./Navbar";
export const MenteeHome=()=>
{
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
    return(
//         <div>
//         {!editflag?
//         <div>
//             <p>{list.user}</p>
//             <p>{list.password}</p>
//             <p>{list.regno}</p>
//             <p>{list.fname}</p>
//             <p>{list.lname}</p>
//             <p>{list.fathername}</p>
//             <p>{list.mothername}</p>
//             <p>{list.email}</p>
//             <p>{list.number}</p>
//             <p>{list.mentor}</p>
//             <p>{list.mentormail}</p>
//             <button onClick={()=>setEditflag(!editflag)}>Edit</button>
//         </div>
//         :
//         <div>
//             <table>
//                 <tbody>
//                 <tr>
//                 <td><label>USERNAME</label></td>
//                 <td><input type={"text"} value={list.user}  name="user" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>PASSWORD</label></td>
//                 <td><input type={"password"} value={list.password} name="password" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>FIRSTNAME</label></td>
//                 <td><input type={"text"} value={list.fname} name="fname" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>LASTNAME</label></td>
//                 <td><input type={"text"} value={list.lname} name="lname" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>REGNO</label></td>
//                 <td><input type={"text"} value={list.regno} name="regno" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>FATHER'S NAME</label></td>
//                 <td><input type={"text"} value={list.fathername} name="fathername" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>MOTHER'S NAME</label></td>
//                 <td><input type={"text"} value={list.mothername} name="mothername" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>EMAIL</label></td>
//                 <td><input type={"email"} value={list.email} name="email" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>MOBILE NUMBER</label></td>
//                 <td><input type={'tel'} value={list.number} name="number" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>MENTOR NAME</label></td>
//                 <td><input type={"text"} value={list.mentor} name="mentor" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>MENTOR EMAIL</label></td>
//                 <td><input type={"email"} value={list.mentormail} name="mentormail" onChange={editProfile}></input><br/></td>
//                 </tr>
//                 </tbody>
//                 <tfoot>
//                 <tr>
//                     <td></td>
//                     <td><button onClick={saveProfile}>Save</button></td>
//                 </tr>
//                 </tfoot>
//                 </table>
//         </div>
// }
//         </div>
<div class="profile-container">
<Navbars/>
<br></br>
  {!editflag?
    // <div>
    //   <p>{list.user}</p>
    //   <p class="user-info">{list.password}</p>
    //   <p class="user-info">{list.regno}</p>
    //   <p class="user-info">{list.fname}</p>
    //   <p class="user-info">{list.lname}</p>
    //   <p class="user-info">{list.fathername}</p>
    //   <p class="user-info">{list.mothername}</p>
    //   <p class="user-info">{list.email}</p>
    //   <p class="user-info">{list.number}</p>
    //   <p class="user-info">{list.mentor}</p>
    //   <p class="user-info">{list.mentormail}</p>
    //   <button class="edit-button" onClick={()=>setEditflag(!editflag)}>Edit</button>
    // </div>
 <div className="user-details">
    <table className="styled-table">
      <tbody>
  <tr>
  <td>Username:</td>
  <td> {list.user}</td>
  </tr>
  <tr>
  <td>Password:</td>
  <td> {list.password}</td>
  </tr>
  <tr>
  <td>Registration Number:</td>
  <td> {list.regno}</td>
  </tr>
  <tr>
  <td>First Name:</td>
  <td> {list.fname}</td>
  </tr>
  <tr>
  <td>Last Name:</td>
  <td> {list.lname}</td>
  </tr>
  <tr>
  <td>Father's Name:</td>
  <td> {list.fathername}</td>
  </tr>
  <tr>
  <td>Mother's Name:</td>
  <td> {list.mothername}</td>
  </tr>
  <tr>
  <td>Email Address:</td>
  <td> {list.email}</td>
  </tr>
  <tr>
  <td>Phone Number:</td>
  <td> {list.number}</td>
  </tr>
  <tr>
  <td>Mentor:</td>
  <td> {list.mentor}</td>
  </tr>
  <tr>
  <td>Mentor Email:</td>
  <td> {list.mentormail}</td>
  </tr>
  <tr>
    <td></td>
  <td><button className="styled-button" onClick={()=>setEditflag(!editflag)}>Edit</button></td>
  </tr>
  </tbody>
  </table>
</div>
    :
    <div className="profile-edit">
    <table className="table-ment">
      <tbody>
        <tr>
          <td><label>USERNAME</label></td>
          <td><input type="text" value={list.user}  name="user" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td><label>PASSWORD</label></td>
          <td><input type="password" value={list.password} name="password" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td><label>FIRSTNAME</label></td>
          <td><input type="text" value={list.fname} name="fname" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td><label>LASTNAME</label></td>
          <td><input type="text" value={list.lname} name="lname" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td><label>REGNO</label></td>
          <td><input type="text" value={list.regno} name="regno" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td><label>FATHER'S NAME</label></td>
          <td><input type="text" value={list.fathername} name="fathername" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td><label>MOTHER'S NAME</label></td>
          <td><input type="text" value={list.mothername} name="mothername" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td><label>EMAIL</label></td>
          <td><input type="email" value={list.email} name="email" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td><label>MOBILE NUMBER</label></td>
          <td><input type='tel' value={list.number} name="number" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td><label>MENTOR NAME</label></td>
          <td><input type="text" value={list.mentor} name="mentor" onChange={editProfile}></input><br/></td>
        </tr>
        <tr>
          <td></td>
          <td><button  className="edit-button" onClick={saveProfile}>Save</button></td>
        </tr>
      </tbody>
      </table>
  </div>
}
</div>


    )
}