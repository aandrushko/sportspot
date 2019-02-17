import React, { Component } from 'react';
import TeamList from './TeamList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Filters from '../dashboard/Filters'


class TeamGrid extends Component {
    
    openCreateTeamPage = () => {   
        return <Redirect to='/newteam'/>
    }

    render () {
        return (
            <div className="teamgrid container"> 
                <div className="input-field">
                    <Link to="/newteam" >Create New Team</Link>
                </div>   
                <div className="row">
                    <TeamList teams={this.props.teams}/>
                </div>                
            </div>
        ) 
    }
}



const mapStateToProps = (state) => {
    return {
        ...state,
        auth: state.firebase.auth,
        teams: state.team.teams
        //projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'teams' }
    ])
)(TeamGrid)
