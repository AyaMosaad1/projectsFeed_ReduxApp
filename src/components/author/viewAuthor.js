import React from 'react'
import Author from './Author'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


const AuthorList = (props) => {
const {Authors} = props;

  return (
    <div className="project-list section text-center lead">
       <h3> Authors </h3>
        {
          Authors &&  Authors.map (item => {
              return (
                <Author author={item} key={item.id}/>
              )
            })
        }
    </div>
  )
}

const mapStateToProps = state => {
    return {
       Authors : state.firestore.ordered.authors,
    }
}

export default compose (
    connect(mapStateToProps),
    firestoreConnect([
      { collection : 'authors'}
    ])
)(AuthorList);
