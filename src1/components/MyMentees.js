import React from 'react'
import { useAuth } from './Authentication'
import download from "../images/download.jpg"
const list=[{img:download,name:"Santhosh A",roll_no:"20CSR186",class:"CSE-D"},
{img:download,name:"Sam Jebadurai T",roll_no:"20CSR180",class:"CSE-C"},
{img:download,name:"Muralidharann S S",roll_no:"20CSR130",class:"CSE-C"}]
const MyMentees = () => {
    const auth=useAuth()
    var a=auth.mentors.map((y)=>{
        if(y.Name===auth.currentMentor){
          return(y.mentees.map((x,index)=>{
          return(<tr key={index}>
              <td><img src={download} alt="f"/></td>
              <td>{x.name}</td>
              <td>{x.roll_no}</td>
              <td>{x.class}</td>
              <td><button>View progress</button></td>
              <td><button>Message</button></td>
          </tr>
          )
        }))
        }
    })
  return (
    <div>
      <table>
        <tbody>
            {a}
        </tbody>
      </table>
      {/* <img src={download} alt="f"/> */}
    </div>
  )
}

export default MyMentees
