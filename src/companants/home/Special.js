import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const Special = () => {
  return (
    <div>

            <div className="special-product d-flex gap-15">
             <div className="special-product-img ">
               <img src=" image/productcard4.jpg" alt="special product" />
             </div>
             <div className="special-product-content ">
              <h6>Sony</h6>
              <h5>Hero Session Action Camera with BMP</h5>
              <ReactStars 
                Count={5}
                size={24}
                value={3}
                edit={false}
                color='#ffd700'
             />
              <p>$16.00 <del>$30.00</del></p>
              <div className="discount-till d-flex align-items-center ">
                <p className="mb-0">
                  <b>5 days</b>
                </p>
                <div className="d-flex gap-15 ms-3">
                  <span className="badge rounded-circle p-3 bg-warning">05</span>
                  <span className="badge rounded-circle p-3 bg-warning">43</span>
                  <span className="badge rounded-circle p-3 bg-warning">12</span>
                </div>
              </div><br />
              <div class="progress">
               <div class="progress-bar bg-success" 
               role="progressbar" style={{width: "75%" }}
               aria-valuenow="75" aria-valuemin="0" 
               aria-valuemax="100"> </div>
              </div>
               <div style={{margin:"10% 0 5% 0"}}>
               <Link className="button">Option</Link> </div>
             </div>
           </div>
         <div className="col-md-6">
        </div>
    </div>
  )
}

export default Special