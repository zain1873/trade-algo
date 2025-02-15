import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import websiteLogo from "../assets/images/website-logo.png"


function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-web">
          <img src={websiteLogo} alt="Website Logo" className="website-logo" />

        </div>
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="or-text">Or login with</p>
        <div className="social-login">
          <button className="google"><i className="fab fa-google"></i> </button>
          <button className="microsoft"><i className="fab fa-microsoft"></i> </button>
          <button className="apple"><i className="fab fa-apple"></i></button>
        </div>

        <Link to="/" className="back-home">Back to Home</Link>
      </div>
    </div>
  );
}

export default Login;
