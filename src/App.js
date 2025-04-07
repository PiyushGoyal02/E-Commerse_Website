import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserLoginSignup from './Login-Signup/UserLoginSignup';

function App() {
  return (
    <div>
      {/* <h1>Hey there</h1> */}
      <Routes>
        <Route path='/' element={<UserLoginSignup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;