import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 }
    ],
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

//   componentWillMount() {
//     console.log('[App.js] componentWillMount');
//   }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
    // const newPerson = this.state.persons
    // newPerson.push({ id: 'asfa1', name: 'ayaaaa', age: 28 });
    // this.setState({ persons: newPerson });
    // console.log (this.state.persons)
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };


  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
<h1> (this.state.showPersons) is true </h1>
      );
    }

    return (
      <div>
<button onClick= {this.nameChangedHandler} > CLICK TO TEST LIFE CYCLE </button>
<h4>  {this.state.showPersons ? "this.state.showPersons is true in render": "this.state.showPersons is false"  }</h4>

        {/* when I want to make conditional randering , we make it in render NOOT in return  */}
        {persons}
      </div>
    );

  }
}

export default ClassComponent;
