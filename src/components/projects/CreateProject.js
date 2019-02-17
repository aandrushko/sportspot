import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Calendar } from 'react-calendar';
import GameTypes from './GameTypes';
import './project.css';
import { Redirect } from 'react-router-dom';

export class CreateProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameId : '12341325',
            gameCreator: 'userID3',
            date: new Date().getTime(), // new Date().getTime()
            commitments: 8, // number of players who already commited,
            gameType: 'Football',
            gameDuration: 60, //duration in minutes,
            playersCommitted: ['userID1','userID2','userID3'],
            notes: 'Roman pls bring ball'     
        }
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
    changeDate =(e)=> {
        this.setState({
            date: e.getTime()
        });
    }
    disableInactiveDays = (date) => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return date.getTime() < yesterday;
    }
    
    render() {
    if(!this.props.firebase.auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="container">
        <form onSubmit={this.submitForm} className="white">
            <h5 className="grey-text text-darken-3">Create Project</h5>
          
            <label htmlFor="title">Title</label>
            <input onChange={this.changeField} type="text" id="title" />

            <div className='game-types'>
                <label htmlFor="title">Game Type</label>
                <GameTypes value={this.state.gameType}/>
            </div>

            <div className='calendar'>
                <label htmlFor="date">Game Date</label>
                <Calendar tileDisabled={({date}) => this.disableInactiveDays(date)} onChange={this.changeDate} value ={new Date(this.state.date)} />
            </div>

            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create Project</button>
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
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
