import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment'


const ProjectDetails = (props) => {
  const {project} = props;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"> { project.title } </span>
          <p> { project.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>{ project.authorFirstName } -- { project.authorLastName }</div>
          <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    </div>
  )
}

//I need all the state to get the data of this project.id
//at first by click we put the id in router then we bring the fireStore to component then get the target project from project and use it as prop to our app

const mapStateToProps = (state , ownProps) => {
  //match params , it is related to the router of this page .. all of this return is props to component
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return{
     project: project ,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(ProjectDetails);
