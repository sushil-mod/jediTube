import React from 'react';
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>

          <div className='banner_info'>

            <div className='banner_title' >
                  <p className='banner_title_heading'> Jedi Tube  </p>
                  <p> Movies,Animation and Game Video etc... </p>
                    <button className='banner_title_btn'> Explore Now</button>
            </div>

          </div>

    <img className='banner_img' src="./assets/banner2.jpg" alt="" />

  </div>
  )
}

export default Banner
