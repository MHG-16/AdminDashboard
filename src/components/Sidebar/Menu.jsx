import React, { useState } from 'react';

import { items } from './SideBarItems';
import './menu.css';

const Menu = () => {
  return (
    <div className='menu'>
        {items.map(item => <div className='menuitem' key={item.title}>
                <div className='title'> <item.icon/> {item.title}</div>
                {item.links && item.links.map( (link, index) => <div 
                className={'links active'} key={index} 
                >
                    <link.icon /> {link.title} 
                </div> )}
            </div>)}
    </div>
  )
}

export default Menu