import React, { Component } from 'react';
import Select from 'react-select';
import './project.css'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class PlayerList extends Component {
    handleChange = (e) => {
        this.props.onSelectUser(e);
    }
    render() {
        return (
            <div className="players">
            {console.log(this.props.projects)}
                <Select onChange={e => this.handleChange(e)} options={this.props.users}
                        getOptionValue={option => option.id} getOptionLabel={option => option.firstName + ' ' + option.lastName} isMulti />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        auth: state.firebase.auth,
        users: state.firestore.ordered.users,
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' },
        {collection: 'projects'}
    ])
)(PlayerList)