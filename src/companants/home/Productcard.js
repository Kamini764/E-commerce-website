import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useLocation } from 'react-router-dom';

const Productcard = (props) => {
  const {grid} =(props);
  let location = useLocation();
  return (
    <>
     <div className= {`${location.pathname =="/our-store" ? `gr-${grid}` : "col-3" }`}>
        <div className="product-card">
         <div className="product-card-img">
             <img src="image/productcard4.jpg" alt="productcard" />
         </div>
         <div className="product-card-content my-5">
             <h6>Sony</h6>
             <h5>Camera Bulk 10 Pack For...</h5>
             <ReactStars 
                Count={5}
                size={24}
                value={3}
                edit={false}
                color='#ffd700'
             />
             <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur, perferendis voluptatibus magnam doloribus necessitatibus blanditiis ullam consectetur similique optio dignissimos rem non iure et culpa aliquid aut quos, tempora molestiae.</p>
             <p>$100</p>
         </div>
         </div>
        </div>
     <div className= {`${location.pathname =="/our-store" ? `gr-${grid}` : "col-3" }`}>
        <div className="product-card">
         <div className="product-card-img">
             <img src="image/productcard4.jpg" alt="productcard" />
         </div>
         <div className="product-card-content my-5">
             <h6>Sony</h6>
             <h5>Camera Bulk 10 Pack For...</h5>
             <ReactStars 
                Count={5}
                size={24}
                value={3}
                edit={false}
                color='#ffd700'
             />
             <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur, perferendis voluptatibus magnam doloribus necessitatibus blanditiis ullam consectetur similique optio dignissimos rem non iure et culpa aliquid aut quos, tempora molestiae.</p>
             <p>$100</p>
         </div>
         </div>
        </div>
    </>
  )
}

export default Productcard