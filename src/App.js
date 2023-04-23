import './App.css';
import { Student } from './Components/StudentSignup';
import { Home } from './Components/Mentorhome';
import { MenteeHome } from './Components/MenteeHome';
import { Mentor } from './Components/MentorSignup';
import LoginPage from './Components/LoginPage';
import { Route,Routes } from 'react-router-dom';
import StudentHome from './Components/Home';
import Chart from './Components/Chart';
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
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/studenthome' element={<StudentHome/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/mentor' element={<Mentor/>}></Route>
        <Route path='/mentorhome' element={<Home/>}></Route>
        <Route path='/mentee' element={<MenteeHome/>}></Route>
        {/* <Route path='/progress' element={<Chart/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
