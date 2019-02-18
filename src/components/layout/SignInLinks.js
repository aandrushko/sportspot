import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignInLinks = (props) =>{
    const   {profile}  = props; 
    return (        
        <ul className="right">
            <li><NavLink to='/newproject'>New Project</NavLink></li>
            <li><a onClick={()=> props.signOut()}>Log Out</a></li>
            <li><NavLink to='/userdetails' className="btn btn-floating pink light-1"> {props.firebase.profile.initials}</NavLink></li>
            { profile.isAdmin ? <li title="You have admin writes"><i className="material-icons">grade</i></li>: null }
           
        </ul>
    )
}
const mapStateToProps = (state) => {
    return {
        ...state,
        profile: state.firebase.profile
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        signOut: ()=> dispatch(signOut()) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignInLinks)