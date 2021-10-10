import React, { Component } from 'react'
import Pagination from './pagination';
import PostSummary from './postSummary'
class newsFeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      loading: true ,
      //starting page
      currentPage : 1,
      //the number of posts n one page
    }
  }

  //fetch the data from server
componentDidMount= ()=>{
async() =>
this.setState({ loading : true})
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => this.setState({ posts: json}))
  .then(() => this.setState({ loading : false}))
}

  render() {
  // Get current posts
  const NumPostsperPage = 10;
  const indexOfLastPost = this.state.currentPage * NumPostsperPage;
  const indexOfFirstPost = indexOfLastPost - NumPostsperPage;
  const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);


  // callback function to Change page and get nuumber of page from child
  const paginate = pageNumber => this.setState({ currentPage : pageNumber });

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s-12 mr6 text-center lead">
        { this.state.posts.length ? currentPosts.map(post => <PostSummary key={post.id} post = {post}/>):
          null
        }

    <Pagination
     postsPerPage = {NumPostsperPage}
     totalPosts={this.state.posts.length}
     paginate= {paginate}
     />
          </div>
        </div>
      </div>
    )
  }
}

export default newsFeed;
