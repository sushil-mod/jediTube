import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome ,FaRegCompass } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { MdPlaylistPlay ,MdOutlineWatchLater ,MdOutlineHistory } from 'react-icons/md'
import './Sidebar.css';


function Sidebar() {

    const data =[
        {
            title : "Home",
            icon : <FaHome/> 
        },
        {
            title : "Explore",
            icon : <FaRegCompass/>
        },
        {
            title : "Playlist" ,
            icon : <MdPlaylistPlay/>
        },
        {
            title : "Liked",
            icon : <BiLike/>
        },
        {
            title : "Watch Later",
            icon : <MdOutlineWatchLater/>
        },
        {
            title : "History",
            icon : <MdOutlineHistory/>
        }
    ]


  return <>
    
    <div className='sidebar' >
        <ul className='sidebarlist'>
           { data.map( ({title , icon }) => 
               <li  > 
               <NavLink to='/' className='row flex-center item-title'  >             
                    <div className='side-icon'>
                        <div className='icon-div flex-center ' > {icon}</div>
                    </div>
                    <div className='side-title' >{title}</div> 
                
                </NavLink>
            </li>
           ) 
           }             
        </ul>
    </div>

  </>
}

export default Sidebar;
