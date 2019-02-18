import Project from './Project'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 14,      
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
  
  class ProjectList extends Component { 
    state = {
      page: 0,
      rowsPerPage: 5,
    };

    handleChangePage = (event, page) => {
      this.setState({page});
    };
  
    handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: event.target.value });
    };

    render() {
      if(!this.props.uid) return <Redirect to='/signin'/>
      const { classes } = this.props;
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
                {this.props.projects && this.props.projects.slice(this.state.page * this.state.rowsPerPage,this.state.rowsPerPage).map(project =>
                  (<Project project={project} uid ={this.props.uid} CustomTableCell={CustomTableCell} />))}
              </TableBody>
            </Table>
            {/* <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={100}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            /> */}
          </Paper>
        </div>
      )
    }
}
export default withStyles(styles)(ProjectList)
