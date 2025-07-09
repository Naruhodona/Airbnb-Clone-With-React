import React from 'react';
import './Header.css';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
        <img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png?20230603231949" />
        <div className='header__center'>
            <input type='text' />
            <SearchIcon />
        </div>
        <div className='header__right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <AccountCircleIcon />
        </div>
    </div>
  )
}

export default Header