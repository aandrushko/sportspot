import React, { Component } from 'react';
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component {
    render () {
        if(!this.props.auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="dashbord container">
                <div className="row">
                    <div className="col s12 m6">
                    <ProjectList projects={this.props.projects}/>
                    </div> 
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>                
            </div>
        ) 
    }
}
const mapStateToProps = (state) => {
    return {
        ...state,
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)
// export default firestoreConnect([{ collection: "projects" }])
// ( connect( 
// mapStateToProps )(Dashboard) )