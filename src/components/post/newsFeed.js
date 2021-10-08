import React, { Component } from 'react'
import PostSummary from './postSummary'
class newsFeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
componentDidMount= ()=>{
 fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => this.setState({ posts: json}))
}

  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">

     { this.state.posts.length ? this.state.posts.map(post => <PostSummary key={post.id} post = {post}/>):
          null
        }


          </div>
        </div>
      </div>
    )
  }
}



export default newsFeed
