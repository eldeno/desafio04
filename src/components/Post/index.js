import React from 'react';

import Comment from '../Comment';

import './style.css';

function Post ({ data }) {
  const { comments } = data;
  return (
    <div id="post-wrap">
      <div id="post-header">
        <img id="profile-pic" src={data.author.avatar} alt="Angelo Picture" />
        <div id="post-info">
          <div id="profile-name">
            {data.author.name}
          </div>
          <div id="date">
            {data.date}
          </div>
        </div>
      </div>
      <div id="post-body">
        {data.content}
      </div>
      {comments.map(comment => <Comment key={comment.id} data={comment}/>)}             
    </div>
  )
}

export default Post;
