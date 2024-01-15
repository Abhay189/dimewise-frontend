import React from 'react';
import '../styles/Login.css'
import BrandLogo from '../resources/BrandLogo.png'
import { Link } from 'react-router-dom';

function Signup(){
    const handleSubmit = (event) => {
       
      };

      const handleChange = (event) => {
       
      };


    return (
        <div className='loginPannel' >
            <h1>Sign-Up</h1>
            <img src={BrandLogo} alt="Brand Logo" />
            <form onSubmit={handleSubmit} className='loginForm'>
                <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="First Name"
                />
                <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Last Name"
                />
                <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Email Address"
                />
                <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Username"
                />
                <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                />
                <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Retype Password"
                />

                <button type="submit">Sign up</button>
            </form>
            <h3>Already have an account? <Link to="/login">Login</Link></h3>
        </div>
    )
}

export default Signup;