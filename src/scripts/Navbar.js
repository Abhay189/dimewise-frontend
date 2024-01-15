import React from 'react';
import BrandLogo from '../resources/BrandLogo.png'
import HomeButton from '../resources/HomeButton2.png'
import AnalyticsButton from '../resources/AnalyticsButton2.png'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';


function Navbar(){

    return (
        <div className='Navbar' >
            <img src={BrandLogo} alt="Brand Logo" />
            <div className='Navbar_subdiv'>
                <div className='navigation_buttons'>
                    <button className='navbar_homebutton' type="button">
                        <img src={HomeButton} alt="Button Image" />
                    </button>
                    <button className='navbar_homebutton' type="button">
                        <img src={AnalyticsButton} alt="Button Image" />
                    </button>
                </div>
                
                <button className='signout_button' type="submit"><Link to="/login">Sign Out</Link></button>
            </div>
        </div>
    )
}

export default Navbar;