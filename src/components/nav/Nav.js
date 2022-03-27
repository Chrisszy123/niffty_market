import React, {useState} from 'react';
import './nav.css'
import logo from '../../assets/Naffiti.png'
import profile from '../../assets/image 11.png'
import {GiHamburgerMenu}  from 'react-icons/gi'

const Nav = () => {
    const [nav, setNav] = useState(false); // the default state of the nav is closed hence false

    return(
        <nav className='container nav_container'>
            <div className='nav_logo'>
                <img className='nav_logo-image' src={logo} alt='logo'/>
            </div>
            <div className='nav_items' >
                <ul className='nav-list'>
                    <li className='nav_list-item'><a><span>Discover</span></a></li>
                    <li className='nav_list-item'><a><span>My NFTs</span></a></li>
                    <li className='nav_list-item'><a><span>How it Works</span></a></li>
                </ul>
                <div className='nav_profile'>
                <button className='btn btn-primary'>Connect Wallet</button>
                <button className='btn btn-primary'>Create</button>
                <img src={profile} alt='' className='profile_pic'></img>
            </div>
            </div> 
            <div className='menu_bar'>
                <GiHamburgerMenu onClick={() => setNav(true)} />
                {nav ? (
                    <div className='mobile_nav'>
                    Hello im the nav 
                </div>
                ): null}
            </div>
        </nav>
    )
}

export default Nav;
