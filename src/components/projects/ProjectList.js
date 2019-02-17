import React from 'react';
import Project from './Project'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white      
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });

const ProjectList = (props) => {
    const { classes} = props;
    return (
    <div className="poject-list section">
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="right">Game type</CustomTableCell>
            <CustomTableCell align="right">Duration</CustomTableCell>
            <CustomTableCell align="right">Min Number of players</CustomTableCell>
            <CustomTableCell align="right">Commitments</CustomTableCell>
            <CustomTableCell align="right">Capacity</CustomTableCell>
            <CustomTableCell align="right">Scheduled Date</CustomTableCell>
            <CustomTableCell align="right">Notes/Comments</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { props.projects && props.projects.map(project=>
            (<Project project={project} CustomTableCell={CustomTableCell}/>)) }
        </TableBody>
        </Table>
        </Paper>
        </div>
    )
}
export default withStyles(styles)(ProjectList)