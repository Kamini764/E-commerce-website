import React from 'react';
import Title from '../ourstore/Title';
import product from '../products/product.css';
import { Link } from 'react-router-dom';

const Compare = () => {
  return (
    <div>
        <Title title="Compare Products"/>
        <div className="compare-product-wrapper "style={{backgroundColor:"#f5f5f7"}}>
            <div className="container">
              <div className="row">
                 <div className="col-md-3">
                    <div className="compare-product-card my-5">
                    
                      <div className="compare-product-card-img position-relative mb-2">
                        <img src="image/cross.jpg" alt="" 
                        className='position-absolute cross'
                         style={{ width: "25px" , height: "25px"}}/>
                        <div className='compare-product-img '>
                        <Link to='/main-product'>
                        <img src="image/productcard1.jpg" alt="" />
                        </Link>
                        </div>
                      </div>
                      <div className="compare-product-details">
                        <h5 className='title'>Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className="price mb-3">$ 100</h6>
                        <div>
                            <div className="product-details">
                                <h5>Brand</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Type</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Size</h5>
                                <div className='d-flex gap-10'>
                                   <p>S</p>
                                   <p>M</p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                 </div>
                 <div className="col-md-3">
                    <div className="compare-product-card my-5">
                      <div className="compare-product-card-img position-relative mb-2">
                        <img src="image/cross.jpg" alt="" 
                        className='position-absolute cross'
                         style={{ width: "25px" , height: "25px"}}/>
                        <div className='compare-product-img '>
                        <img src="image/productcard1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="compare-product-details">
                        <h5 className='title'>Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className="price mb-3">$ 100</h6>
                        <div>
                            <div className="product-details">
                                <h5>Brand</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Type</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Size</h5>
                                <div className='d-flex gap-10'>
                                   <p>S</p>
                                   <p>M</p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                 </div>
                 <div className="col-md-3">
                    <div className="compare-product-card my-5">
                      <div className="compare-product-card-img position-relative mb-2">
                        <img src="image/cross.jpg" alt="" 
                        className='position-absolute cross'
                         style={{ width: "25px" , height: "25px"}}/>
                        <div className='compare-product-img '>
                        <img src="image/productcard1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="compare-product-details">
                        <h5 className='title'>Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className="price mb-3">$ 100</h6>
                        <div>
                            <div className="product-details">
                                <h5>Brand</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Type</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Size</h5>
                                <div className='d-flex gap-10'>
                                   <p>S</p>
                                   <p>M</p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                 </div>
                 <div className="col-md-3">
                    <div className="compare-product-card my-5">
                      <div className="compare-product-card-img position-relative mb-2">
                        <img src="image/cross.jpg" alt="" 
                        className='position-absolute cross'
                         style={{ width: "25px" , height: "25px"}}/>
                        <div className='compare-product-img '>
                        <img src="image/productcard1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="compare-product-details">
                        <h5 className='title'>Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className="price mb-3">$ 100</h6>
                        <div>
                            <div className="product-details">
                                <h5>Brand</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Type</h5>
                                <p>Havels</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Size</h5>
                                <div className='d-flex gap-10'>
                                   <p>S</p>
                                   <p>M</p>
                                </div>
                            </div>
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

export default Compare