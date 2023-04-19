import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// export const Student=()=>
// {
//     const navigate=useNavigate();
//     const[user,setUser]=useState("")
//     const[password,setPassword]=useState("")
//     const[Cpassword,setCpassword]=useState("")
//     const[regno,setRegno]=useState("");
//     const[fname,setFname]=useState("");
//     const[lname,setLname]=useState("");    
//     const[fathername,setFathername]=useState("");
//     const[mothername,setMothername]=useState("");
//     const[email,setEmail]=useState("");
//     const[number,setNumber]=useState("");
//     const[mentor,setMentor]=useState("");
//     const[mentormail,setMentormail]=useState("");
//     const[details,setDetails]=useState([]);
//     const submit=()=>
//     {
//         if(password===Cpassword)
//         {
        
//         setDetails([...details,{"user":user,"password":password,"fname":fname,"lname":lname,"regno":regno,"fathername":fathername,"mothername":mothername,"email":email,"number":number,"mentor":mentor,"mentormail":mentormail}])
//         axios.post("http://localhost:3500/details",{"user":user,"password":password,"fname":fname,"lname":lname,"regno":regno,"fathername":fathername,"mothername":mothername,"email":email,"number":number,"mentor":mentor,"mentormail":mentormail}).
//         then((response)=>{console.log(response)}).catch((err)=>{console.log(err)})
//         // navigate()
//         }
//         else
//         {
//             alert("Password didnot match");
//         }
//     }
//     const clear=()=>
//     {
//         setUser("")
//         setPassword("")
//         setCpassword("")
//         setFname("")
//         setLname("")
//         setRegno("")
//         setFathername("")
//         setMothername("")
//         setEmail("")
//         setNumber("")
//         setMentor("")
//         setMentormail("")
//     }
//     const l=details.map(x=><h1>{x.user}</h1>)
//     return(
//         <div style={{color:"white"}}>
//             {l}
//             <table>
//                 <tbody>
//                 <tr>
//                 <td><label>USERNAME</label></td>
//                 <td><input type={"text"} value={user} onChange={(e)=>setUser(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>PASSWORD</label></td>
//                 <td><input type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>CONFIRM PASSWORD</label></td>
//                 <td><input type={"password"} value={Cpassword} onChange={(e)=>setCpassword(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>FIRSTNAME</label></td>
//                 <td><input type={"text"} value={fname} onChange={(e)=>setFname(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>LASTNAME</label></td>
//                 <td><input type={"text"} value={lname} onChange={(e)=>setLname(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>REGNO</label></td>
//                 <td><input type={"text"} value={regno} onChange={(e)=>setRegno(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>FATHER'S NAME</label></td>
//                 <td><input type={"text"} value={fathername} onChange={(e)=>setFathername(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>MOTHER'S NAME</label></td>
//                 <td><input type={"text"} value={mothername} onChange={(e)=>setMothername(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>EMAIL</label></td>
//                 <td><input type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>MOBILE NUMBER</label></td>
//                 <td><input type={'tel'} value={number} onChange={(e)=>setNumber(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>MENTOR NAME</label></td>
//                 <td><input type={"text"} value={mentor} onChange={(e)=>setMentor(e.target.value)}></input><br/></td>
//                 </tr>
//                 <tr>
//                 <td><label>MENTOR EMAIL</label></td>
//                 <td><input type={"email"} value={mentormail} onChange={(e)=>setMentormail(e.target.value)}></input><br/></td>
//                 </tr>
//                 </tbody>
//                 <tfoot>
//                 <tr>
//                     <td></td>
//                     <td><button onClick={submit}>Submit</button>
//                     <button type='reset' onClick={clear}>Reset</button></td>
//                 </tr>
//                 </tfoot>
//                 </table>

//         </div>
//     );
// }
export const Student=()=>{
    return(
    <div class="container">

    <div class="row">
    
        <div class="col-lg-6 mx-auto mt-4">
        
            <div class="card shadow">
        
                <div class="card-header bg-primary">
        
                    <h3 class="text-light">Sign In</h3>
        
                </div>
        
            <div class="card-body p-4">
        
                <form action="/add" method="post" id="add-form" enctype="multipart/form-data">
        
                    <div class="mb-3">
        
                        <label for="name">Name</label>
                        
                        <input type="text" name="name" class="form-control form-control-lg" placeholder="Enter name" required />  
                    </div>
        
                    <div class="mb-3">
                    
                        <label for="email">Email</label>
                        
                        <input type="email" name="email" class="form-control form-control-lg" placeholder="Enter email" required />
                    
                    </div>
                    <div class="mb-3">

                        <label for="phone">Phone</label>
                        
                        <input type="tel" name="phone" class="form-control form-control-lg" placeholder="Enter phone" required />
                        
                    </div>
            
                    <div class="mb-3">
                    
                        <label for="image" class="form-label">Upload Photo</label>
                        
                        <input class="form-control form-control-lg" type="file" name="image" />
                    
                    </div>

                    <div class="mb-3">

                        <label for="mentorname">Mentor Name</label>
                        
                        <input type="tel" name="mentorname" class="form-control form-control-lg" placeholder="Mentor Name" required />
                        
                    </div>

                    <div class="mb-3">

                        <label for="mentormail">Mentor Email</label>
                        
                        <input type="tel" name="mentormail" class="form-control form-control-lg" placeholder="MentorEmail" required />
                        
                    </div>

                    <div class="mb-3">

                        <label for="phone">Phone</label>
                        
                        <input type="tel" name="phone" class="form-control form-control-lg" placeholder="Enter phone" required />
                        
                    </div>
            
                    <div class="mb-3 d-grid">
                    
                        <input type="submit" name="submit" value="Add User" class="btn btn-primary btn-lg" />
                    
                    </div>
                    
                </form>
            
            </div>
            
        </div>
            
    </div>
    </div>
    </div>
    );
}