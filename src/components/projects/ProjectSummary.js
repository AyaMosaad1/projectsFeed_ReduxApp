import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import { deleteProject } from '../../store/actions/projectActions';
import { Link } from 'react-router-dom';



const ProjectSummary = (props) => {

const deleteItem =(e ,id) =>{
    e.stopPropagation();
    props.deleteProject(id)

  }
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{props.project.title}</span>
        <p>Posted by {props.project.authorFirstName} {props.project.authorLastName}</p>
        <p className="grey-text">{moment(props.project.createdAt.toDate()).calendar()}</p>
        <Link className="btn btn-dark mx-4" to={'/project/' + props.project.id } onClick={e => e.stopPropagation}> details </Link>
       <button className="btn btn-dark" onClick={e => deleteItem(e,props.project.id)}> delete </button>
      </div>

    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    deleteProject : projectID => dispatch(deleteProject(projectID))
  }
}

export default connect(null,mapDispatchToProps ) (ProjectSummary);
