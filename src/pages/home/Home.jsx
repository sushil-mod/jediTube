import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

function Home() {
  return <>
  <Navbar/>

  <div className='d-flex' >
    <Sidebar/>
    <div className='wd-100'>this home</div>
  </div>
  </>
}

export default Home;
