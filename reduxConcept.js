//reducer
const reducer = (state =[] , action) => {
  if (action.type == "splite"){
    return action.data.split(' ')
  }
  else if (action.type == "addName"){
    state.push(action.data)
     return state
  }
  return state
}


//store
const store = Redux.createStore(reducer)

//state 
console.log(store.getState());

//Action
const action = {
  type :'splite',
  data : 'Hamza Nabile'
}

//dispatch
store.dispatch(action)
//state 
console.log(store.getState());

const newAction = {
  type:"addName",
  data :"Mohamed"
}

store.dispatch(newAction);

//state 
console.log(store.getState());





