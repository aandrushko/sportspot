import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) =>{
    

    return (
        <ul className="right">
            <li><NavLink to='/newproject'>New Project</NavLink></li>
            <li><a onClick={()=> props.signOut()}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink light-1"> {props.firebase.auth.email.slice(0,2).toUpperCase()}</NavLink></li>
        </ul>
    )
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        signOut: ()=> dispatch(signOut()) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignInLinks)