import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createTeam } from '../../store/actions/teamActons';
import { Redirect } from 'react-router-dom';

export class CreateTeam extends Component {
    state={
        title: '',
        content: ''       
    }
    submitForm =(e)=> {
        e.preventDefault()
        this.props.CreateTeam(this.state)
    }
    changeField =(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
    if(!this.props.firebase.auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="container">
        <form onSubmit={this.submitForm} className="white">
            <h5 className="grey-text text-darken-3">Create Team</h5>
          
            <label htmlFor="title">Title</label>
            <input onChange={this.changeField} type="text" id="title" />

            <label htmlFor="content">Team Content</label>
            <textarea className="materialize-textarea" onChange={this.changeField} type="content" id="content">
            
            </textarea>  
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create Team</button>
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (team) => dispatch(createTeam(team))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam)
