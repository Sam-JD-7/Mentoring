import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
export const Home=()=>
{
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
    const l1=list.map((x,index)=><tr key={index}><td>{x.user}</td><td>{x.regno}</td><td><button>View progress</button></td></tr>)
    return(

        <table style={{alignItems:"center"}}>
            <tbody style={{color:"white"}}>
            {l1}
            </tbody>
        </table>
        
    );
}