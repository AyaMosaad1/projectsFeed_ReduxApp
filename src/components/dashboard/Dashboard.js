import React, { Component } from 'react'
import { connect } from 'react-redux'


import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

/**
here we need to connect it to project reducer because reducer is had the action and state of this component
/ 1- we need to take the state from Projectreducer to component
//a- add connect to component
//b- call return the state in mapStateToProps  fucntion to use it in component
//c- add the mapStateToProps to connect to connect the store with this component
//d- use the state as props in this component by this.props in dynamic var
//e-
*/

class Dashboard extends Component {
  render() {
    const { projects } =  this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects = { projects }/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProp = (state) => {
  return{
    projects: state.project.projects
  }
}

export default connect(mapStateToProp)(Dashboard)
