import React, { useState } from 'react';
import "../Css-Code/UserLoginSignupCSS.css";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import UserLoginSignupNavbar from '../Navbar-Sections/UserLoginSignupNavbar';

const UserLoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className="main-wrapper">
      <UserLoginSignupNavbar />

      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form>
            <div className="heading">Create Account</div>
            <div className="social-container">
              <div className="social"><FaFacebookF /></div>
              <div className="social"><FaGooglePlusG /></div>
              <div className="social"><FaLinkedinIn /></div>
            </div>
            <div className="small-text">or use your email for registration</div>
            <input className="input-field" type="text" placeholder="Name" />
            <input className="input-field" type="text" placeholder="Surname" />
            <input className="input-field" type="email" placeholder="Email" />
            <input className="input-field" type="password" placeholder="Password" />
            <div className="btn">Sign Up</div>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form>
            <div className="heading">Sign in</div>
            <div className="social-container">
              <div className="social"><FaFacebookF /></div>
              <div className="social"><FaGooglePlusG /></div>
              <div className="social"><FaLinkedinIn /></div>
            </div>
            <div className="small-text">or use your account</div>
            <input className="input-field" type="email" placeholder="Email" />
            <input className="input-field" type="password" placeholder="Password" />
            <div className="forgot-link">Forgot your password?</div>
            <div className="btn">Sign In</div>
          </form>
        </div>

        {/* Overlay Section */}
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