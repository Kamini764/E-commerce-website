import React from 'react';
import { Link } from 'react-router-dom';
import "../header/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping,faCodeCompare,faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
    <header>
     <div className="container-fluid" style={{backgroundColor:"#131921"}}>
      <div className="row">
        <div className="col-md-6"><p className="text-white mb-0">Free shopping over $100 & free return</p></div>
        <div className="col-md-6"><p className="text-white mb-0 text-end">Hotline:(888)4344 6000 -(888) 1338 8193</p></div>
      </div>
     </div>
     <div className="container-fluid">
      <div className="row bg-dark">
        <div className="col-md-2 text-white mt-3"> 
        <h2>Amazon</h2>
        </div>
        <div className="col-md-5">
        <div className="input-group my-4">
         
            <input type="text" id="form1" className="form-control mt-y" placeholder='Search product here' 
            area-aria-label='Search product here' area-aria-describedby='basic-addon'/>
            <span className="input-group-text" id='basic-addon2' style={{backgroundColor:"#ff9933"}}>
            <FontAwesomeIcon icon={faSearch}/></span>
                
            
           </div>
        </div>
        <div className="col-md-5">
        <div className=" d-flex align-Items-center justify-content-between">
          <div >
          <Link to='/compare-products' style={{color:"white"}}>
          <FontAwesomeIcon icon={faCodeCompare} size={'2x'}/>
           <p>
           Compare <br />Products
           </p>
           </Link>
          </div>
          <div>
          <Link to='/wishlist' style={{color:"white"}}>
           <FontAwesomeIcon icon={faHeart} size={'2x'}/> 
           <p>Favourite <br />Products</p>
           </Link>
          </div>
          <div>
          <Link to='login' style={{color:"white"}}>
          <FontAwesomeIcon icon={faUser} size={'2x'}/>
           <p>Log in <br /> My Account</p>
           </Link>
          </div>
          <div>
          <Link to='/cart' className='text-white d-inline'>
          <FontAwesomeIcon icon={faCartShopping} size={'2x'}/>
           <div className='d-block  gap-10'> <span className="badge bg-white text-dark fs-8">0</span></div>
           <p>$ 500</p>
           </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="container-fluid " style={{backgroundColor:"black",color:"white"}}>
        <div className="row">
        <div className="col-md-4">
        <div class="dropdown">
            <button style={{color:"white",fontSize:"20px",margin:"10px 0 0 30px"}} class=" btn dropdown-toggle" type="button" id="dropdownMenuButton1" 
            data-bs-toggle="dropdown" aria-expanded="false" >
             <span>Shop Catagory</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{backgroundColor:"black"}}>
              <li><Link class="dropdown-item" to="#" >Action</Link></li>
              <li><Link class="dropdown-item" to="#">Another action</Link></li>
              <li><Link class="dropdown-item" to="#">Something else here</Link></li>
            </ul>
          </div>

            </div>

          <div className="col-md-3">
          <nav className="navbar navbar-expand-lg text-white">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/" style={{color:"white",fontSize:"20px"}}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/our-store" style={{color:"white",fontSize:"20px"}}>Our Store</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/blogs" style={{color:"white",fontSize:"20px"}} >Blogs</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact-us" style={{color:"white",fontSize:"20px"}}>Contact</Link>
                    </li>
                </ul>
              </div>
            </nav>  
             </div>
                </div> 
                  </div>
         </header>
    </div>
    
  );
};

export default Header;
