import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutHandler } from '../../features/authentication/authSlice';
import { toast } from 'react-toastify';

function Navbar() {
  const { userToken } = useSelector((store)=> store.authentication);
  const dispatch = useDispatch() ;
  
  return <>
     <nav className='menu flex-space-btw bx-shadow'>  

    <div className='d-flex'>       
    <Link className='menu__link flex-center'  to="/">
        <i className='fas fa-jedi menu__link_logo ' ></i>
        <span className='menu__link_title text-center'>JediTube</span>                              
    </Link> 

    </div>

    <div className='menu__container gap-lg flex-space-btw '>

      <div className='menu__container_link cur-pointer'>
       { userToken ? <button className='login_link flex-center' style={{ background:"transparent" ,border:"none" }} 
        onClick={ ()=>{ localStorage.removeItem('loginInfo');   dispatch(userLogoutHandler()); toast.success("Logout Successfull") } }> <CgProfile /> Logout </button> 
        : <Link className='login_link flex-center' to="/login"  > <CgProfile /> Login  </Link>  } 
      </div> 
    </div>
  </nav>
  </>
}

export default Navbar;
