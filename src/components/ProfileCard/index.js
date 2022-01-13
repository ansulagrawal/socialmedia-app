import React from 'react';
import './ProfileCard.css';

function ProfileCard({
   id,
   name,
   username,
   email,
   address,
   phone,
   website,
   company,
}) {
   return (
      <div className='ProfileCard'>
         <div className='ProfileCard__col'>
            <img
               src={`https://avatars.dicebear.com/api/male/${id}.svg`}
               alt={`${id}`}
               className='ProfileCard__photo'
            />
            <h2 className='ProfileCard__name'>{name}</h2>
            <p className='ProfileCard__name'>(@{username})</p>
         </div>
         <div className='ProfileCard__col left'>
            <div className='ProfileCard__row'>
               <b>Email:&nbsp;</b> {email}
            </div>
            <div className='ProfileCard__row'>
               <b>Phone:&nbsp;</b> {phone}
            </div>
            <div className='ProfileCard__row'>
               <b>Address:&nbsp;</b> {address.street} {address.suite}{' '}
               {address.city} {address.zipcode}
            </div>
            <div className='ProfileCard__row'>
               <b>Website:&nbsp;</b> {website}
            </div>
            <div className='ProfileCard__row'>
               <b>Company:&nbsp;</b> {company.name}
            </div>
         </div>
      </div>
   );
}

export default ProfileCard;
