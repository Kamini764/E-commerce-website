import React from 'react';
import Title from '../ourstore/Title';


const Wishlist = () => {
  return (
    <div>
        <Title title='Wishlist'/>
        <div className="wishlist-wrapper " style={{backgroundColor:"#f5f5f7"}}>
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <div className="wishlist-product-card my-5">
                      <div className="wishlist-product-card-img position-relative mb-2">
                        <img src="image/cross.jpg" alt="" 
                        className='position-absolute cross'
                         style={{ width: "25px" , height: "25px"}}/>
                        <div className='wishlist-product-img '>
                        <img src="image/productcard3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="wishlist-product-details">
                        <h5 className='title'>Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className="price mb-3">$ 100</h6>
                      <div>
                     </div>
                    </div>
                   </div>
                 </div>
                 <div className="col-md-3">
                    <div className="wishlist-product-card my-5">
                      <div className="wishlist-product-card-img position-relative mb-2">
                        <img src="image/cross.jpg" alt="" 
                        className='position-absolute cross'
                         style={{ width: "25px" , height: "25px"}}/>
                        <div className='wishlist-product-img '>
                        <img src="image/productcard2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="wishlist-product-details">
                        <h5 className='title'>Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className="price mb-3">$ 100</h6>
                      <div>
                     </div>
                    </div>
                   </div>
                 </div>
                 <div className="col-md-3">
                    <div className="wishlist-product-card my-5">
                      <div className="wishlist-product-card-img position-relative mb-2">
                        <img src="image/cross.jpg" alt="" 
                        className='position-absolute cross'
                         style={{ width: "25px" , height: "25px"}}/>
                        <div className='wishlist-product-img '>
                        <img src="image/productcard3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="wishlist-product-details">
                        <h5 className='title'>Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className="price mb-3">$ 100</h6>
                      <div>
                     </div>
                    </div>
                   </div>
                 </div>
                 <div className="col-md-3">
                    <div className="wishlist-product-card my-5">
                      <div className="wishlist-product-card-img position-relative mb-2">
                        <img src="image/cross.jpg" alt="" 
                        className='position-absolute cross'
                         style={{ width: "25px" , height: "25px"}}/>
                        <div className='wishlist-product-img '>
                        <img src="image/productcard2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="wishlist-product-details">
                        <h5 className='title'>Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className="price mb-3">$ 100</h6>
                      <div>
                     </div>
                    </div>
                   </div>
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wishlist