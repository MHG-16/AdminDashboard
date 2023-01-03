import React from 'react';

import './Updates.css';
import { usersData } from './data';

const Updates = () => {
  return (
    <div className='Updates'>
        {usersData.map((user, index) => {
            return (
                <div className='user' key={index}>
                    <figure>
                        <img src={user.img} alt='avatar' />
                        <figcaption className='figCap'>{user.name}</figcaption>
                    </figure>
                    <div className='notification'>
                        <div className='detail'>
                            {user.noti}
                        </div>
                        <div>
                            <span>{user.time}</span>
                        </div>
                            
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Updates