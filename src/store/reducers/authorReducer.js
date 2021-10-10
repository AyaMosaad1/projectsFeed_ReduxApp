const initState = {
  }

  const authorReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_AUTHOR_SUCCESS':
        console.log('create AUTHOR success');
        return state;
      case 'CREATE_AUTHOR_ERROR':
        console.log('create AUTHOR error');
        return state;
      default:
        return state;
    }
  };

  export default authorReducer;