import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserLoginSignup from './Login-Signup/UserLoginSignup';
import HomePage from './Components/HomePage';
import AdminLoginSigup from './AdminSection/AdminLoginSignup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLoginSignup/>}></Route>
        <Route path='/homepage' element={<HomePage/>}></Route>



        {/* Admin Section Routes */}
        <Route path='/adminloginsignup' element={<AdminLoginSigup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;