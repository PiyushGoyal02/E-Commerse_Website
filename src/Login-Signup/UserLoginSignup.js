import axios from "axios";
import toast from "react-hot-toast";
import React, { useState } from "react";
import "../Css-Code/UserLoginSignupCSS.css";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import UserLoginSignupNavbar from "../Navbar-Sections/UserLoginSignupNavbar";

const UserLoginSignup = () => {
  const navigate = useNavigate();
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const [LogIn, setLogIn] = useState({ email: "", password: "" });
  const [SignUp, setSignUp] = useState({
    name: "",
    surname: "",
    accountType: "user",
    email: "",
    password: "",
  });

  const ValueChange = (e) =>
    setSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const LoginValueChange = (e) =>
    setLogIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Sign up Section APIs
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/v1/signup/signup`, SignUp, {
        headers: { "Content-Type": "application/json" },
      });
      const userSignupUserid = res.data.user._id;
      console.log(userSignupUserid)
      localStorage.setItem("userSignupUserid", userSignupUserid);

      toast.success("Signup successful!");
      navigate("/homepage");
    } catch (error) {
      toast.error(error.message || "Signup failed!");
    }
  };

  // Login Section APIs
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/v1/login/login`, LogIn, {
        headers: { "Content-Type": "application/json" },
      });
      const userLoginUserId = res.data.user._id;
      console.log(userLoginUserId)
      localStorage.setItem("userLoginUserId", userLoginUserId);

      toast.success("Login successful!");
      navigate("/homepage");
    } catch (error) {
      toast.error(error.message || "Login failed!");
    }
  };

  return (
    <div className="main-wrapper">
      <UserLoginSignupNavbar />
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
        {/* Sign Up */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUpSubmit}>
            <div className="heading">Create Account</div>
            <div className="social-container">
              <div className="social"><FaFacebookF /></div>
              <div className="social"><FaGooglePlusG /></div>
              <div className="social"><FaLinkedinIn /></div>
            </div>
            <div className="small-text">or use your email for registration</div>
            <input className="input-field" type="text" name="name" placeholder="Name" value={SignUp.name} onChange={ValueChange} required />
            <input className="input-field" type="text" name="surname" placeholder="Surname" value={SignUp.surname} onChange={ValueChange} required />
            <select className="input-field" name="accountType" value={SignUp.accountType} onChange={ValueChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <input className="input-field" type="email" name="email" placeholder="Email" value={SignUp.email} onChange={ValueChange} required />
            <input className="input-field" type="password" name="password" placeholder="Password" value={SignUp.password} onChange={ValueChange} required />
            <button className="btn" type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleLoginSubmit}>
            <div className="heading">Sign in</div>
            <div className="social-container">
              <div className="social"><FaFacebookF /></div>
              <div className="social"><FaGooglePlusG /></div>
              <div className="social"><FaLinkedinIn /></div>
            </div>
            <div className="small-text">or use your account</div>
            <input className="input-field" type="email" name="email" placeholder="Email" value={LogIn.email} onChange={LoginValueChange} required />
            <input className="input-field" type="password" name="password" placeholder="Password" value={LogIn.password} onChange={LoginValueChange} required />
            <div className="forgot-link">Forgot your password?</div>
            <button className="btn" type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay Panel */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <div className="heading">Welcome Back!</div>
              <div className="text">To keep connected with us please login with your personal info</div>
              <div className="btn ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</div>
            </div>
            <div className="overlay-panel overlay-right">
              <div className="heading">Hello, Friend!</div>
              <div className="text">Enter your personal details and start journey with us</div>
              <div className="btn ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginSignup;
