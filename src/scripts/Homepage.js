import React, { useState, useEffect } from 'react';
import '../styles/Homepage.css'
import Accounts_logo from '../resources/Accounts.png'
import Navbar from './Navbar';
import EditLogo from '../resources/edit2.png'
import TransactionLogo from '../resources/transactions.png'
import OverviewLogo from '../resources/overview.png'


function Homepage(){
    const [accountsData, setAccountsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/data') // This is your API endpoint
          .then(response => response.json())
          .then(data => {
            setAccountsData(data);
            setIsLoading(false);
          });
      }, []);

    function Accounts() {
        if (isLoading) {
            return(
                <div className='Accounts'>
                    <div className='cardtitle'>
                        <img src={Accounts_logo} alt="Accounts Logo" />
                            Accounts
                    </div>
                    <div className='loading'>Loading...</div>
                    <button className=' editButton' type="button">
                        <img src={EditLogo} alt="Accounts Logo" />
                        Edit
                    </button>
                </div>     
            );
        }
        
        return (
        <div className='Accounts'>
            <div className='cardtitle'>
                <img src={Accounts_logo} alt="Accounts Logo" />
                Accounts
            </div>
            {/* Render your accounts data here */}
            <button className=' editButton' type="button">
                <img src={EditLogo} alt="Accounts Logo" />
                Edit
            </button>
        </div>
        );
    }

    function Overview() {
        if (isLoading) {
            return(
                <div className='Accounts'>
                    <div className='cardtitle'>
                        <img src={OverviewLogo} alt="Accounts Logo" />
                            Overview
                    </div>
                    <div className='loading'>Loading...</div>
                </div>     
            );
        }
        
        return (
        <div className='Accounts'>
            <div className='cardtitle'>
                <img src={OverviewLogo} alt="Accounts Logo" />
                Overview
            </div>
        </div>
        );
    }

    function Transactions() {
        if (isLoading) {
            return(
                <div className='Transactions'>
                    <div className='cardtitle'>
                        <img src={TransactionLogo} alt="Accounts Logo" />
                            Transactions
                    </div>
                    <div className='loading'>Loading...</div>
                    <button className=' editButton' type="button">
                        <img src={EditLogo} alt="Accounts Logo" />
                        Edit
                    </button>
                </div>     
            );
        }
        
        return (
        <div className='Transactions'>
            <div className='cardtitle'>
                <img src={TransactionLogo} alt="Accounts Logo" />
                Transactions
            </div>
            {/* Render your accounts data here */}
            <button className=' editButton' type="button">
                <img src={EditLogo} alt="Accounts Logo" />
                Edit
            </button>
        </div>
        );
    }

    return (
        <div className='Homepage' >
            < Navbar />
            <div className='AccountsOverview'>
                < Accounts />
                < Overview />
            </div>
            <Transactions />
        </div>
    )
}

export default Homepage;