import React from 'react';
import Logo from '../../data/Logo.png';
import {AiOutlineClose}  from 'react-icons/ai';

import './SideBar.css';
import Menu from './Menu';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='logo'>
            <img src={Logo} alt='' />
            <span><label>A</label>megakuru <label>N</label>o <label>S</label>ato</span>
            <span><AiOutlineClose /></span>
        </div>
        <Menu />
    </div>
  )
}

export default SideBar