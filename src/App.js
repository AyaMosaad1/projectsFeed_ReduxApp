import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import newsFeed from './components/post/newsFeed';
import addAuthor from './components/author/addAuthor';
import ClassComponent from './components/post/setUpClassComp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>

            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/newsFeed' component={newsFeed} />
            <Route path="/Authors" component={addAuthor} />
            <Route path="/test" component={ClassComponent} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
