import React, { Component } from 'react'

export class SignIn extends Component {
    state={
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

export default SignIn
