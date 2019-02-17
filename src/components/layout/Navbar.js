import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLiks from './SignOutLinks'
import { connect } from 'react-redux';


const Navbar = (props) =>{
    const { auth } = props;
    return (
        <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to='/' className='brand-logo'>
                SportSpot
            </Link>
            { auth.isEmpty ? <SignOutLiks/> : <SignInLinks/> }
        </div>
        </nav>
    )
}
const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)