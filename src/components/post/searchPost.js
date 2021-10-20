import React, { Component } from 'react'
import PostSummary from './postSummary';


class SearchPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchItem : "",
      SearchPost: []
    }
  }

  //fetch the data from server
componentDidMount= ()=>{
}



// componentDidUpdate =()=>{
//   this.handelChange(this.props.data)
// }

  render() {
    let render ;
    if (this.state.searchItem){
      render = this.state.SearchPost.map(post => <PostSummary key={post.id} post = {post}/> )
    }
   const handelChange = (data) => {
      const results = data.filter( person => person.title == this.state.searchItem);
      this.setState({ SearchPost : results})
    }


    return (
      <div>
      <div className="wrapper">
      <div className="search-wrapper text-center">
          <label htmlFor="search-form">
              <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input text-dark text-center"
                  placeholder="Search for..."
                  value={this.state.searchItem}
                  /*
                  // set the value of our useState q
                  //  anytime the user types in the search box
                  */
                  onChange={(e) => this.setState({ searchItem : e.target.value})}
              />
          </label>
          <button onClick={() => handelChange(this.props.data)}> Search </button>
      </div>
      </div>
{ render }


      </div>
  )
  }
}
export default SearchPost;