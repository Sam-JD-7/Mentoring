import React, { useState } from 'react'
import './mymentees.css'
import Button from 'react-bootstrap/Button';

import bg from './bg_img.jpg'
function Courses() {
  const [list, setList] = useState([])
  const [display, setDisplay] = useState(false)
  const [save, setsave] = useState(false)
  const [cname, setCname] = useState("")
  const [code, setCode] = useState("")
  const [grade, setGrade] = useState("O")
  const [edit, setEdit] = useState(false)
  const li = list.map((x, index) =>
    <tr key={index}>
      <td>{x.course_name}</td>
      <td>{x.course_code}</td>
      <td>{x.course_grade}</td>
    </tr>
  )
  const li2 = list.map((x, index) =>
    <tr key={index}>
      <td><input value={x.course_name} onChange={(e) => setCname(e.target.value)} /></td>
      <td>{x.course_code}</td>
      <td>{x.course_grade}</td>
    </tr>
  )
  const add = () => {
    setDisplay(false)
    setsave(true)
    setList([...list, { course_name: cname, course_code: code, course_grade: grade }])
    setCname("")
    setCode("")
    setGrade("O")
  }
  return (
    <>
    <div className="coursesBg" >
      <div className='entry'>
        <br></br>
        <br></br>
        <Button onClick={() => setDisplay(true)} variant="light">Add Subject</Button>
        {display ?
          <form onSubmit={add}>
            <div>
              <label>Course Name</label>
              <input type="text" name="cname" value={cname} onChange={(e) => setCname(e.target.value)} placeholder="Enter Course Name" required />
            </div>
            <div>
              <label>Course Code</label>
              <input type="text" name="ccode" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter Course Code" required />
            </div>
            <div>
              <label>Your Grade</label>
              <select id="grade" value={grade} name="grade" onChange={(e) => setGrade(e.target.value)} placeholder="--Select grade--">
                <option value="O">O</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="RA">RA</option>
              </select>
            </div>
            <button type="submit">Add</button>
          </form> : ""}
        
      {list.length >= 1 ?
        <>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Course Code</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {li}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td><button className='styled-button' onClick={() => { setEdit(true) }}>Save</button></td>
                <td></td>
              </tr>
            </tfoot>

          </table>
          <div style={{ backgroundColor: "black", marginLeft: "30%", display: "inline", color: "white", fontWeight: "bolder" }}>GPA &ensp;<input value="9.8" style={{ width: "40px" }} /></div>
          <div style={{ backgroundColor: "black", marginLeft: "30%", display: "inline", color: "white", fontWeight: "bolder" }}>CGPA <input value="9.8" style={{ width: "40px" }} /></div>
        </>
        : ""}
      {edit ?

        <table className="styled-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {li2}
          </tbody>
          <tfoot>
            <tr>
              <td>GPA</td>
              <td>9.8</td>
            </tr>
            <tr>
              <td></td>
              <td><button className='styled-button' onClick={() => { setEdit(true) }}>Save</button></td>
            </tr>
          </tfoot>
        </table>


        : ""}
        </div>
        </div>
        </>
    
  )
}

export default Courses
