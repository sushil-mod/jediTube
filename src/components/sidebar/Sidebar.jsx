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
            icon : <FaHome/>,
            link : "/",
        },
        {
            title : "Explore",
            icon : <FaRegCompass/>,
            link : "/explore",
        },
        {
            title : "Playlist" ,
            icon : <MdPlaylistPlay/>,
            link : "/playlist",
        },
        {
            title : "Liked",
            icon : <BiLike/>,
            link : "/liked",
        },
        {
            title : "Watch Later",
            icon : <MdOutlineWatchLater/>,
            link : "/watchlater",
        },
        {
            title : "History",
            icon : <MdOutlineHistory/>,
            link : "/history",
        }
    ]


  return <>
    <div className='sidebar' >
        <ul className='sidebarlist'>
           { data.map( ({title , icon , link}) => 
               <li key={title} > 
               <NavLink to={link} className='row flex-center item-title'  >             
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
