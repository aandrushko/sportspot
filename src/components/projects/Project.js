import React from 'react';
import {deleteProject} from '../../store/actions/projectActions'
import {connect} from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Redirect } from 'react-router-dom';

const Project = (props) => {
  if(!props.uid) return <Redirect to='/signin'/>
      return (        
            <TableRow key = {props.project.gameId}>
              <props.CustomTableCell align="right">
                {props.project.gameType}
              </props.CustomTableCell>
              <props.CustomTableCell align="right">
                {props.project.gameDuration}
              </props.CustomTableCell>
              <props.CustomTableCell align="right">
                {props.project.minNumberOfPlayers}
              </props.CustomTableCell>
              <props.CustomTableCell align="right">
                {props.project.commitments}
              </props.CustomTableCell>
              <props.CustomTableCell align="right">
                {props.project.capacity}
              </props.CustomTableCell>
              <props.CustomTableCell align="right">
                {new Date(props.project.date).toISOString().slice(0,10)}
              </props.CustomTableCell>
              <props.CustomTableCell align="right">
                {props.project.notes}
              </props.CustomTableCell>
            </TableRow>         
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteProject: (project) => dispatch(deleteProject(project))
//     }

// }

//export default connect(null,mapDispatchToProps)(Project)
export default Project;