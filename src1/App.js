import logo from './logo.svg';
import './App.css';
import MyMentees from './components/MyMentees';
import Mentorlogin from './components/Mentorlogin';
import { MenteeSignUp } from './components/MenteeSignUp';
import { AuthenticationProvider } from './components/Authentication';
import {Routes,Route} from 'react-router-dom'
import LoginPage from './components/LoginPage';
function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path='/mymentees' element={<MyMentees/>}/>
          <Route path='menteeSignUp' element={<MenteeSignUp/>}/>
        </Routes>
        {/* <MenteeSignUp/> */}
      </AuthenticationProvider>
    </div>
  );
}

export default App;
