import React, { Component } from 'react';

import Post from '../Post';

import AngeloPic from '../../assets/profile.png';
import GuilhermePic from '../../assets/guilherme.jpg';
import RennanPic from '../../assets/rennan.jpeg';
import HenriquePic from '../../assets/henrique.jpeg';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Guilherme Souza',
          avatar: GuilhermePic
        },
        date: '26 jan 2020',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, dolorem?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Angelo Chagas',
              avatar: AngeloPic
            },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum molestiae officia amet, dolorum rerum animi quaerat porro, hic sed reiciendis exercitationem assumenda, provident cum.'
          },
          {
            id: 1,
            author: {
              name: 'Henrique Froes',
              avatar: HenriquePic
            },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis id, nesciunt ipsam quibusdam quos dicta accusantium similique delectus impedit a sint natus laudantium ipsum veniam. Labore corrupti obcaecati modi exercitationem consectetur vitae laudantium, ipsum nostrum laborum aperiam impedit iste.'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Renan Carvalho',
          avatar: RennanPic
        },
        date: '22 dez 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quas? ipsum dolor sit amet consectetur adipisicing elit. Et, deserunt!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Guilherme Souza',
              avatar: GuilhermePic
            },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi voluptatem. Accusantium placeat earum minus quidem repudiandae saepe doloribus ullam!'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Henrique Froes',
          avatar: HenriquePic
        },
        date: '02 dez 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem optio fugit in natus similique.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Angelo Chagas',
              avatar: AngeloPic
            },
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero accusantium harum illum optio, inventore consequatur placeat numquam qui earum repellat?'
          },
          {
            id: 2,
            author: {
              name: 'Henrique Froes',
              avatar: HenriquePic
            },
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate laborum quod explicabo. Dolore, tempora possimus.'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </>
    )
  }
}

export default PostList;