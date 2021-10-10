export const createAuthor=(newAuthor) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();

        firestore.collection('authors').add({
          ...newAuthor
        }).then(() => {
          dispatch({ type: 'CREATE_AUTHOR_SUCCESS' });
        }).catch(err => {
          dispatch({ type: 'CREATE_AUTHOR_ERROR' }, err);
        });
      }

}