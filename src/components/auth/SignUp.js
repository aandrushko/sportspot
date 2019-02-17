import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';


export class SignUp extends Component {
    state={
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    submitForm =(e)=> {
        e.preventDefault()
        this.props.signUp(this.state)
    }
    changeField =(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
    if(this.props.firebase.auth.uid) return <Redirect to='/'/>
    return (
      <div className="container">
        <form onSubmit={this.submitForm} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>

            <label htmlFor="firstName">First Name</label>
            <input onChange={this.changeField} type="text" id="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.changeField} type="text" id="lastName" />
            
            <label htmlFor="email">Email</label>
            <input onChange={this.changeField} type="text" id="email" />

            <label htmlFor="password">Password</label>
            <input onChange={this.changeField} type="password" id="password" />

            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            </div>            
            
        </form>
        { this.props.auth.authError ? <p>{ this.props.auth.authError.message } </p> : null}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (userData) => dispatch(signUp(userData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
