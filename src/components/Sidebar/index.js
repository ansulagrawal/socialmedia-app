import React from 'react';
import UserListItem from '../UserListItem';
import './Sidebar.css';

function Sidebar({ data, selectedId, setSelectedId }) {
   return (
      <div className='Sidebar '>
         <h1>Users</h1>
         {data.map((item, index) => (
            <UserListItem
               id={item.id}
               name={item.name}
               setSelectedId={setSelectedId}
               selectedId={selectedId}
               index={index}
            />
         ))}
      </div>
   );
}

export default Sidebar;
