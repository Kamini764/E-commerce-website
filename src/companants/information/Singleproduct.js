import React from 'react';
import Title from '../ourstore/Title';
import { Link } from 'react-router-dom';
import information from '../information/information.css';

const Singleproduct = () => {
  return (
    <div>
        <Title title="Product Name"/>
        <div className="main-product-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                      
                    </div>
                    <div className="col-md-6">
                      
                    </div>
                </div>
            </div>
        </div>
        <div className="description-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="bg-white p-3">
                  <h4>Description</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, neque voluptas
                     tempore dolorum aperiam ipsa assumenda libero est quaerat id animi! Possimus dignissimos
                     tempore dolorum aperiam ipsa assumenda libero est quaerat id animi! Possimus dignissimos  
                     reiciendis illum eaque iusto fugit, magnam excepturi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-wrapper py-5 home-wrapper-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Singleproduct