import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Card = () => {

  return (
    <div>
       <div className="blog-card">
        <div className="blog-image">
           <img src="image/blog3.jpg" className='img-fluid w-100' alt="blog" />
        </div>
        <div className="blog-content mt-3">
           <p>12 August 2023</p>
           <h5>A beautiful Sunday Morning remaissance</h5>
            <p>Lorem ipsum dolor sit amet consectetur mnis natus velit nesciunt saepe odit? Placeat, suscipit laborum!</p>
            <br />
            <Link to='/singleblog'
            className='button' style={{textDecoration:"none"}}>
              Read More
            </Link>
            </div>
        </div>
      </div>
  )
}

export default Card