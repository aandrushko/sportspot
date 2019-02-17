import React from 'react';
import {deleteTeam} from '../../store/actions/teamActons'
import {connect} from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Team = (props) => {
    return (        
            <TableRow>
              <props.CustomTableCell align="center">
                {props.team.teamName}
              </props.CustomTableCell>
              <props.CustomTableCell align="center">
              {props.team.teamType}
              </props.CustomTableCell>
              <props.CustomTableCell align="center">
              {props.team.teamLead}
              </props.CustomTableCell>
              <props.CustomTableCell align="center">
              {props.team.date}
              </props.CustomTableCell>
              <props.CustomTableCell align="center">
              {props.team.winRate}
              </props.CustomTableCell>
            </TableRow>         
    )
}

export default Team;