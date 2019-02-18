import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

export class CreateProject extends Component {
    state={
        title: '',
        content: ''       
    }
    submitForm =(e)=> {
        e.preventDefault()
        this.props.createProject(this.state)
    }
    changeField =(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm} className="white">
            <h5 className="grey-text text-darken-3">Create Project</h5>
          
            <label htmlFor="title">Title</label>
            <input onChange={this.changeField} type="text" id="title" />

            <label htmlFor="content">Project Content</label>
            <textarea className="materialize-textarea" onChange={this.changeField} type="content" id="content">
            
            </textarea>  
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create Project</button>
            </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }

}

export default connect(null, mapDispatchToProps)(CreateProject)
