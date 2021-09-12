import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
//it take the init state from redux state as prop 
  // const [count , setCount ] = useState(props.count)
  // const increaseCount =()=> setCount(count+1)
  // const decreaseCount =()=> setCount(count-1)
const count = props.count 
  return (
    <Container className="mt-5" >
      

<button className="btn btn-primary" onClick={props.increaseCount}> increaseCount </button>
<h1> { count } </h1>
<button className="btn btn-danger"  onClick= {props.decreaseCount}> decreaseCount </button>
   
  </Container>
  );
}

//bring the state of redux to send it as props to this component by connect
// return propsOfComponent : stateOfRedux from store 
function mapStateToProps(state){
  return{
    count :state.count
  }
}

const actionIn = {
  type : "increase"
}
// actionDe ={
//   type ="decrease"
// }

//props : dispatch
function mapDispatchToProps(dispatch){
return{
  increaseCount : () => dispatch(actionIn) , 
  decreaseCount : () => dispatch({type : "decrease"})
}
} 

export default connect(mapStateToProps , mapDispatchToProps )(App);
