import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserLoginSignup from './Login-Signup/UserLoginSignup';
import HomePage from './Components/HomePage';
import AdminLoginSigup from './AdminSection/AdminLoginSignup';
import AdminHomePage from './AdminSection/AdminHomePage';
import AllProductsUI from './Components/AllProductsUI';
import ContactDetails from './Components/ContactDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLoginSignup/>}></Route>
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/allproductsui' element={<AllProductsUI/>}></Route>
        <Route path='/contactdetails' element={<ContactDetails/>}></Route>


        {/* Admin Section Routes */}
        <Route path='/adminloginsignup' element={<AdminLoginSigup/>}></Route>
        <Route path='/adminhomepage' element={<AdminHomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;