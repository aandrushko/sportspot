import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

function ProjectDetails(props) {  
  const { project } = props;
  if(!this.props.firebase.auth.uid) return <Redirect to='/signin'/>
  if (project) {
    return (
      <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title"> - {props.project.title}</span>
              <p className="">{props.project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey text">
              <div>Posted By {props.project.authorFirstName} {props.project.authorLastName}</div>
              
            </div>
          </div>
      </div>
    )
  } else {
    return (
      <div className="container"> Loading </div>
    )    
  }

}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null  
  return {
    project : project
  }
}

export default compose(  
  connect(mapStateToProps),  
  firestoreConnect([
    { collection : 'projects'}
  ])
)(ProjectDetails)
