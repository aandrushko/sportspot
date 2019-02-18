import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class UserDetails extends Component {
    render (){
        const {profile}  = this.props; 
        if (profile.isEmpty){ 
            return <Redirect to='/signin'></Redirect>
        } else {
            return (
            <div>
                <div className="container">
                    <div className="row col sm-12">
                        {/* TODO action column with
                            <div className="col sm-3 offset-sm2 ">
                            <h5 className="col sm2">Actions</h5>
                            <div className="row icons-panel">
                            </div>
                        </div> */}
                        <div className="col sm-8 offset-sm-3">
                            <h3>User Details</h3>
                            <div className="row icons-panel">
                                <div className='col sm4'>
                                    <i className="material-icons">grade</i>
                                    <i className="material-icons">edit</i>
                                    <i className="material-icons">cancel</i>
                                    <i className="material-icons">check</i>
                                </div>

                            </div>
                            <div className="row data-container">
                            <div className="row">
                                <div className='col sm2'>First Name</div>
                                <div className='col sm2'>Andrii</div>
                            </div>
                            <div className="row">
                                <div className='col sm2'>Last Name</div>
                                <div className='col sm2'>Andrushko</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    }
}
const mapStateToProps = (state) => {
    return {
        ...state,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(UserDetails)