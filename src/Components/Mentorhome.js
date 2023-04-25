import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import './mymentees.css'
import MentorNavbar from "./MentorNavbar";
import { useNavigate } from "react-router-dom";

export const MentorHome=()=>{
    const navigate=useNavigate()
    const[list,setList]=useState([]);
    useEffect(()=>{
    axios.get("http://localhost:3500/details").then(
        (resp)=>
        {
            for(let i=resp.data.length-1;i>=0;i--)
            {
                if(resp.data[i].mentormail===localStorage.getItem("email"))
                {
                    setList((prev)=>[...prev,resp.data[i]])
                    // console.log(resp.data[i])
                    // setList(prev=>{return {...list,resp.data[i]}})
                }
            }
            // const l=resp.data.find(x=>x.mentormail===localStorage.getItem("email"))
            // console.log(l);
            // setList(l)
        }
    ).catch((err)=>{console.log(err)})},[])
    const add=()=>{
        for(let i of list){
        axios.put(`http://localhost:3500/details/${i.id}`,{...i,sem1:{...i.sem1,sub2:"math"}})
        .then(res=> console.log(res))
        .catch(err=>console.log(err))
        }
    }
    const l1=list.map((x,index)=><tr key={index}><td>{x.user}</td><td>{x.regno}</td><td><button className="styled-button" onClick={()=>navigate("/semester")}>View progress</button></td> <td><button className="styled-button">Message</button></td></tr>)
    return(
        <div style={{position:"relative"}}>
        <MentorNavbar/>
        <table className="styled-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Progress</th>
                <th>Message</th>
            </tr>
            </thead>
            <tbody>
            {l1}
            </tbody>
        </table>
        {/* <button onClick={add}>Add</button> */}
        </div>
    );
}