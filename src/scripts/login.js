import React from 'react';
import '../styles/Login.css'
import BrandLogo from '../resources/BrandLogo.png'
import { Link } from 'react-router-dom';


function Login(){
    const handleSubmit = (event) => {
       
      };

      const handleChange = (event) => {
       
      };


    return (
        <div className='loginPannel' >
            <h1>Login</h1>
            <img src={BrandLogo} alt="Brand Logo" />
            <form onSubmit={handleSubmit} className='loginForm'>
                <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Email \ Username"
                />

                <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                />

                <button type="submit">Login</button>
            </form>
            <h3>Don't have an account yet? <Link to="/signup">SignUp</Link></h3>
        </div>
    )
}

export default Login;