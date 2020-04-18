import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav-wrapper cyan darken-4'>
            <div className='container'>
                <NavLink to='/' className='brand-logo'>  <i className="large material-icons">apps</i>
                    Application
                </NavLink>
                <ul className='right'>
                    <li><NavLink to='/'>Todo's</NavLink></li>
                    <li><NavLink to='/Posts' >Posts</NavLink></li>
                    <li><NavLink to='/Redirect' >MovieDB</NavLink></li>
                    {/* <li><NavLink to='/Contact'>Contact</NavLink></li> */}
                </ul>

            </div>
        </nav>
    )

}

export default Navbar;