
export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();

     // get the data of profile "logged in user"
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};



export const deleteProject = (projectID) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').doc(projectID).delete()
  }
};
