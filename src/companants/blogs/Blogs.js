import React from 'react';
import Title from '../ourstore/Title';
import Card from '../home/Card';
import blog from '../blogs/blog.css';

const Blogs = () => {
  return (
    <div>
      <Title title="Our Blogs"/>
      <div className="blog-wrapper " style={{backgroundColor:"#f5f5f7"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            <div className="blog-cards mt-5">
              <h3 className='blogs-title'>Find By Catagories</h3>
              <div>
                <ul>
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Contact</li>
                  <li>Blogs</li>
                </ul>
              </div>
              </div>
            </div>
            <div className="col-md-9 mt-5">
             <div className="row">
              <div className="col-md-6">
              <Card/>
              </div>
              <div className="col-md-6">
              <Card/>
              </div>
             </div>
             <div className="row my-4">
              <div className="col-md-6">
              <Card/>
              </div>
              <div className="col-md-6">
              <Card/>
              </div>
             </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blogs