import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp  from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import UserDetails from './components/user/UserDetails';
import TeamGrid from './components/teams/TeamGrid';
import CreateTeam from './components/teams/CreateTeam';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/projects/:id' component={ProjectDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/newproject' component={CreateProject}/>
            <Route path='/teamGrid' component={TeamGrid}/>
            <Route path='/newteam' component={CreateTeam}/>
            <Route path='/userdetails' component= {UserDetails}/>
          </Switch>
          
        </div>        
      </BrowserRouter>
    );
  }
}
export default App;
