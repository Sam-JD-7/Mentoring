// import './App.css';
import { Student } from './Components/StudentSignup';
import { Home } from './Mentorhome';
import { MenteeHome } from './Components/MenteeHome';
import { Mentor } from './Components/MentorSignup';
import LoginPage from './Components/LoginPage';
import { Route,Routes } from 'react-router-dom';
import StudentHome from './Components/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<LoginPage/>}></Route>
        <Route path='/studenthome' element={<StudentHome/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/mentor' element={<Mentor/>}></Route>
        <Route path='/mentorhome' element={<Home/>}></Route>
        <Route path='/mentee' element={<MenteeHome/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
