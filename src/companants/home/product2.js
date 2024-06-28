import React from 'react';
import ReactStars from 'react-rating-stars-component';

const product2 = (props) => {
    const{my_img , brand , title , desc , price}=props;
  return (
    <div>
        <div className="product-card">
         <div className="product-card-img">
             <img src={my_img} alt="productcard" />
         </div>
         <div className="product-card-content my-5">
             <h6>{brand}</h6>
             <h5>{title}</h5>
             <ReactStars 
                Count={5}
                size={24}
                value={3}
                edit={false}
                color='#ffd700'
             />
             <p>{desc}</p>
             <p>{price}</p>
         </div>
         </div>
    </div>
  )
}

export default product2