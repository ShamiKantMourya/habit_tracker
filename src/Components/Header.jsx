import React from 'react';
import {FaSearch} from "react-icons/fa";

import "../SCSS/header.scss";

const Header = () => {
  return (
    <div className='header'>
        <div className='header-text'>
            <h3>Habit_Tracker</h3>
        </div>
    <div className='search-bar'>
        <input type='text' placeholder='Search your habit'/>
        <button className='search-btn'><FaSearch/></button>
    </div>
    </div>
  )
}

export default Header;