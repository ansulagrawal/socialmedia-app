import React from 'react';
import './Card.css';

function Card({ title, body }) {
   return (
      <div className='Card'>
         <h2>{title}</h2>
         <p>{body}</p>
      </div>
   );
}

export default Card;
