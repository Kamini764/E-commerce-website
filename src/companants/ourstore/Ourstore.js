import React, { useState } from 'react'
import Title from './Title';
import store from '../ourstore/store.css';
import ReactStars from 'react-rating-stars-component';
import Productcard from '../home/Productcard';

const Ourstore = () => {
 const [grid,setGrid] = useState(4);
  
  return (
    <>
     <Title title="Our Store"/>
     <div className="store-wrapper" style={{backgroundColor:"#f5f5f7"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className='filter-card my-3'>
              <h4 className='filter-title'>Shop By Catagory</h4>
              <div>
                <ul className='pb-0'>
                  <li> Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li> Laptop</li>
                </ul>
              </div>
            </div>
            <div className='filter-card my-3'>
              <h4 className='filter-title'>Filter By</h4>
              <div>
                <h4 className='sub-title'>Availability</h4>
                <div className='form-check'>
                  <input 
                  className='form-check-input'
                  type="checkbox" />
                  <label className='form-check-label' htmlFor=''>
                    In Stock
                  </label>
                </div>
                <div className='form-check'>
                  <input 
                  className='form-check-input'
                  type="checkbox" />
                  <label className='form-check-label' htmlFor=''>
                    Out Of Stock
                  </label>
                </div>
              </div>
              <div>
                <h4 className='sub-title'>Price</h4>
                <div className='d-flex align-items-center gap-15'>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput"
                   placeholder="From"/>
                  <label for="floatingInput">From</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput"
                   placeholder="to"/>
                  <label for="floatingInput">To</label>
                </div>
               </div>
              </div>
             <div>
                <h4 className='sub-title'>Colors</h4>
                <div >
                  <ul >
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className='sub-title'>Size</h4>
                <div className='form-check'>
                  <input 
                  className='form-check-input'
                  type="checkbox"
                  id="color2" />
                  <label className='form-check-label' htmlFor='color2'>
                    S (2)
                  </label>
                </div>
                <div className='form-check'>
                  <input 
                  className='form-check-input'
                  type="checkbox"
                  id="color2" />
                  <label className='form-check-label' htmlFor='color2'>
                    M (2)
                  </label>
                </div>
              </div>
            </div>
            <div className='filter-card my-3'>
              <h4 className='filter-title'>Product tags</h4>
              <div>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                   <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                   <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptops</span>
                   <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Speaker</span>
                   <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                   <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Vivo</span>
                   <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Wire</span>
                   <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Oppo</span>
                </div>
              </div>
            </div>
            <div className='filter-card my-3'>
              <h4 className='filter-title'>Random Products</h4>
              <div>
                <div className='Random-product d-flex gap-10 ' >
                  <div className='Random-product-img'>
                    <img src="image/productcard2.jpg" alt="" />
                  </div>
                  <div className='Random-product-content'>
                  <h6>Sony</h6>
                      <h5>Camera Bulk 10 Pack For...</h5>
                      <ReactStars 
                          Count={5}
                          size={24}
                          value={3}
                          edit={false}
                          color='#ffd700'
                      />
                      <p>$100</p>
                  </div>

                </div>
                <div className='Random-product d-flex gap-10 mt-3'>
                  <div className='Random-product-img' >
                    <img src="image/productcard3.jpg" alt="" />
                  </div>
                  <div className='Random-product-content'>
                  <h6>Sony</h6>
                      <h5>Mobiles Bulk 20 Pack For...</h5>
                      <ReactStars 
                          Count={5}
                          size={24}
                          value={3}
                          edit={false}
                          color='#ffd700'
                      />
                      <p>$100</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className='filter-sort-grid mt-3'>
              <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center justify-content-between gap-15'>
                <p className='mb-0 d-block'>Sort By</p>
                <select name="" id="" className='form-control form-select'style={{width:"200px"}}>
                  <option value="manual">Featured</option>
                  <option value="Best selling">Best selling</option>
                  <option value="title ascending">Alphabetically A-Z</option>
                  <option value="title descending">Alphabetically</option>
                  <option value="created ascending">Date,Old to New</option>
                  <option value="created Descending">Date,New to old</option>
                  <option value="price-ascending">Price,low to high</option>
                  <option value="price-descending">Price,high to low</option>
                </select>
              </div>
              <div className='d-flex align-items-center justify-content-between gap-15'>
                <p className='totalproducts'>21Products</p><br />
                 <div className='d-flex gap-10 align-items-center gap-10'>
                  <img onClick={()=>{setGrid(3);}} src="image/lines.jpg" className='d-block img-fluid' alt="grid" />
                  <img onClick={()=>{setGrid(4);}} src="image/line2.jpg" className='d-block img-fluid' alt="grid" />
                  <img onClick={()=>{setGrid(6);}} src="image/line2.jpg" className='d-block img-fluid' alt="grid" />
                  <img onClick={()=>{setGrid(12);}} src="image/line2.jpg" className='d-block img-fluid' alt="grid" />
                 </div>
              </div>
            </div>
           </div>
           <div className="product-list py-3">
           <div className="d-flex gap-10 flex-wrap">
            <Productcard grid={grid}/>
            </div>
           </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Ourstore