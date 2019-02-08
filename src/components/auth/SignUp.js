import React, { Component } from 'react'

export class SignUp extends Component {
    state={
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    submitForm =(e)=> {
        console.log(this.state)
        e.preventDefault()
    }
    changeField =(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state[e.target.id])
    }
    render() {
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
      </div>
    )
  }
}

export default SignUp
