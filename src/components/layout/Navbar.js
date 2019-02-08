import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignUpLiks from './SignOutLinks'

const Navbar = () =>{
    return (
        <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to='/' className='brand-logo'>
                Marioplan
            </Link>
            <SignInLinks/>            
            <SignUpLiks/>
                        
        </div>
        </nav>
    )
}
export default Navbar