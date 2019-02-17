import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

export class SignIn extends Component {
    state={
        email: '',
        password: ''
    }
    submitForm =(e)=> {        
        e.preventDefault()
        this.props.signIn(this.state);
    }
    changeField =(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
    // check Auth state
    
    if (this.props.firebase.auth.uid) return <Redirect to='/'/>

    return (
      <div className="container">
        <form onSubmit={this.submitForm} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            
            <label htmlFor="email">Email</label>
            <input onChange={this.changeField} type="text" id="email" />

            <label htmlFor="password">Password</label>
            <input onChange={this.changeField} type="password" id="password" />

            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Login</button>
            </div>            
            
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        ...state,        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds)=> dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
