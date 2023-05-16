import React, { useState } from 'react';
import "./Navbar.css"
import { MenuItems } from '../MenuItems/MenuItems';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <nav className='NavbarItems'>

                <h1 className='navbar-logo'>TravelMan</h1>

                <div className='menu-icons'>
                    <i onClick={toggleMenu} className={isMenuOpen ? "fas fa-times" : "fas fa-bars" }></i>
                </div>

                <ul className={isMenuOpen ? "nav-menu active" : "nav-menu" }>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                <i className={item.icon}></i>{item.title}
                                </a>
                            </li>
                        );
                    })}
                    <button>Sign Up</button>
                    
                </ul>
            </nav>
        </div>
            
        
    );
};

export default Navbar;