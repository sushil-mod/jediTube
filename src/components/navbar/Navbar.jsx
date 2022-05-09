import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
import './Navbar.css';

function Navbar() {
  return <>
     <nav className='menu flex-space-btw bx-shadow' >  

    <div className='d-flex'>  
            
     <div className='flex-center ham ham-icon'><FaBars /></div>
    
    <Link className='menu__link flex-center'  to="/">
        <i className='fas fa-jedi menu__link_logo ' ></i>
        <span className='menu__link_title text-center'>JediTube</span>                              
    </Link> 

    </div>

    <div className='menu__container gap-lg flex-space-btw '>

                <div className='menu__container_link cur-pointer'>
                    <Link className='login_link flex-center' to="/"  > <CgProfile /> Login  </Link>
                </div> 
    </div>
  </nav>
  </>
}

export default Navbar;
