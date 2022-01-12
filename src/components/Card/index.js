import React, { useState } from 'react';
import './Card.css';

function Card({ title, body, id, index, comments }) {
   const [displayComments, setDisplayComments] = useState(false);
   return (
      <div className='Card' key={index}>
         <h2>{title}</h2>
         <p>{body}</p>

         <div className='Card__comments'>
            <details>
               <summary
                  onClick={() => setDisplayComments((old) => !old)}
                  style={{
                     cursor: 'pointer',
                     marginBottom: '20px',
                     fontWeight: 'Bolder',
                  }}
               >
                  Comments
               </summary>
            </details>
            {displayComments &&
               comments.map((comment, index) => {
                  if (comment.postId === id)
                     return (
                        <div style={{ marginLeft: '20px' }}>
                           <a
                              href={`mailto:${comment.email}`}
                              style={{ color: 'black' }}
                           >
                              <b>{comment.name}</b>
                           </a>
                           <p>{comment.body}</p>
                        </div>
                     );
               })}
         </div>
      </div>
   );
}

export default Card;
