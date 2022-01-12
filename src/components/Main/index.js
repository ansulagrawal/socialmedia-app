import React, { useState, useEffect } from 'react';
import Card from '../Card';
import ProfileCard from '../ProfileCard';
import './Main.css';

function Main({ data }) {
   const [posts, setPosts] = useState([]);
   const [comments, setComments] = useState([]);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((response) => setPosts(response));
   }, []);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
         .then((response) => response.json())
         .then((response) => setComments(response));
   }, []);
   return (
      <div className='Main'>
         <h1>Content</h1>

         <ProfileCard
            id={data.id}
            name={data.name}
            username={data.username}
            email={data.email}
            address={data.address}
            phone={data.phone}
            website={data.website}
            company={data.company}
         />
         <h2 style={{ margin: '30px 0px 20px 0px' }}>Posts</h2>
         {posts.map((post, index) => {
            if (post.userId === data.id)
               return (
                  <Card
                     id={post.id}
                     title={post.title}
                     body={post.body}
                     index={index}
                     comments={comments}
                  ></Card>
               );
         })}
      </div>
   );
}

export default Main;
