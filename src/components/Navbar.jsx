import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import Logo from './images/assets/shared/desktop/logo.svg'

import './styles/App.css'

function Navbar() {
    const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false); 

    return (
        <nav className='navbar'>
            <div className="navbar-cont">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
                    <img src={Logo} alt="payapi logo"/>
                </Link>
                <div className="menu-icon">
                    <i className={click? 'fas fa-times': 'fas fa-bars'} onClick={handleClick}></i>
                </div>
                <ul className={click? 'nav-menu active' :'nav-menu'}>
                    <li className="nav-item"><Link to='/pricing' className='nav-links' onclick={closeMobileMenu}>Pricing</Link></li>
                    <li className="nav-item"><Link to='/about' className='nav-links' onclick={closeMobileMenu}>About</Link></li>
                    <li className="nav-item"><Link to='/contact' className='nav-links' onclick={closeMobileMenu}>Contact</Link></li>
                </ul>
                <button className='pink-btn'>Schedule a Demo</button>
            </div>
            
        </nav>
    )
}

export default Navbar
