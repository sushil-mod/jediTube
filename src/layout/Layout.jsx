import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'

function Layout({children}) {
  return (
    <div className='d-flex'  >
    <Sidebar/>
    <div className='wd-100' style={{ backgroundColor:" #181818 " }}>
      {children}
    </div>
  </div>
  )
}

export default Layout ;
