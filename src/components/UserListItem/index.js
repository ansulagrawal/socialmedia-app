import React from 'react';
import './UserListItem.css';

function UserListItem({ id, name, index, selectedId, setSelectedId }) {
   return (
      <div
         className={`UserListItem ${selectedId === id && 'selected'}`}
         key={index}
         onClick={() => setSelectedId(id)}
      >
         <img
            src={`https://avatars.dicebear.com/api/male/${id}.svg`}
            alt={name}
            className='UserListItem_pic'
         />
         <p>{name}</p>
      </div>
   );
}

export default UserListItem;
