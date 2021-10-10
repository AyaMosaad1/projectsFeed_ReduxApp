import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import AuthorList from './viewAuthor';
import { createAuthor } from '../../store/actions/authorAction'

class addAuthor extends Component {
  state = {
    name: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.addAuthor(this.state);
  }
  render() {
    const { auth  } = this.props;
    if (!auth.uid) return <Redirect to="/signIn"/>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New author</h5>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label htmlFor="name">Author name</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Author Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Add Author</button>
          </div>
        </form>

        <AuthorList/>
      </div>


    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
  addAuthor : (newAuthor)=> dispatch(createAuthor(newAuthor))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addAuthor)
