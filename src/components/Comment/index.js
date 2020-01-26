import React from 'react';

import './style.css';

function Comment({ data }) {
  console.log(data);
  return (
    <div id="wrap">
      <img src={data.author.avatar} alt="UserPic" id="user-pic"/>
      <div id="comment-body">
        <span>{data.author.name}</span> {data.content}
      </div>
    </div>      
  )
}

export default Comment;
