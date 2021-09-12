import React, {useState , useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
//it take the init state from redux state as prop 
  const [count , setCount ] = useState(props.countProp)
  const increaseCount =()=> setCount(count+1)
  const decreaseCount =()=> setCount(count-1)

  return (
    <Container className="mt-5" >
      

<button className="btn btn-primary" onClick={increaseCount}> increaseCount </button>
<h1> { count } </h1>
<button className="btn btn-danger"  onClick= {decreaseCount}> decreaseCount </button>
   
  </Container>
  );
}

//bring the state of redux to send it as props to this component by connect
// return propsOfComponent : stateOfRedux from store 
function mapStateToProps(state){
  return{
    countProp :state.count
  }
}
export default connect(mapStateToProps)(App);
