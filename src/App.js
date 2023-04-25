import './App.css';
import { Student } from './Components/StudentSignup';
import { MentorHome } from './Components/Mentorhome';
import { MenteeHome } from './Components/MenteeHome';
import { Mentor } from './Components/MentorSignup';
import LoginPage from './Components/LoginPage';
import { Route,Routes } from 'react-router-dom';
import Semester from './Components/Semester';
import Home from './Components/Home';
import Chart from './Components/Chart';
import Courses from './Components/Courses';
const myStyle={
  backgroundImage: 
"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
  height: '110vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
};
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/semester' element={<Semester/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/mentor' element={<Mentor/>}></Route>
        <Route path='/mentorhome' element={<MentorHome/>}></Route>
        <Route path='/mentee' element={<MenteeHome/>}></Route>
        {/* <Route path='/progress' element={<Chart/>}></Route> */}
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
    </div>
  );
}

export default App;
