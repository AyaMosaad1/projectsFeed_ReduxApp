import React from 'react';

const Author = ({author}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{author.name}</span>
        <p>the content of this author is : {author.content}</p>
      </div>
    </div>
  )
}

export default Author;
