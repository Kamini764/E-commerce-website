import React from 'react';
import { Link } from 'react-router-dom';


const Singleblog = () => {
  return (
    <div>
        <div className="single-blog-wrapper" style={{backgroundColor:"#f5f5f7"}}>
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
                    <div className="col-md-9">
                    <div className="blog-cards my-5" style={{backgroundColor:"#f5f5f7"}}>
                        <div className="blog-images">
                        <img src="image/blog3.jpg" className='img-fluid w-100' alt="blog" />
                        </div>
                         <div className="blog-contents mt-3">
                           <p>12 August 2023</p>
                           <h5>A beautiful Sunday Morning remaissance</h5>
                            <p>Lorem ipsum dolor sit amet consectetur mnis natus velit nesciunt saepe 
                            odit? Placeat, suscipit laborum!Lorem ipsum dolor sit amet consectetur mnis natus velit nesciunt saep
                            Lorem ipsum dolor sit amet consectetur mnis natus velit nesciunt saepLorem ipsum dolor sit amet consectetur mnis natus velit nesciunt saep
                            Lorem ipsum dolor sit amet consectetur mnis natus velit nesciunt saep Lorem ipsum dolor sit amet consectetur mnis natus velit nesciunt saep</p>
                         </div>
                         <div className='d-flex gap-30'>
                            <p>22 Augustt 2023</p>
                            <p>Kaamini Sharma</p>
                         </div>
                         <div>
                            <div className='d-flex justify-content-between align-items-center my-5'>
                                <Link to='/blogs' style={{color:"black",textDecoration:"none"}}>Go back to blogs</Link>
                                <div className="image-div">
                                    <p>radha</p>
                                </div>
                            </div>
                            <div className='comment-wrapper px-5 py-3'style={{backgroundColor:"white"}}>
                            <form action="">
                                <h4 className='my-3'>Leave A Comment</h4>
                                <div className="name d-flex align-items-center justify-contents-center">
                                <input type="text" name="fname" id="" placeholder='Name' className='form-control '/>
                                <input type="email" name="email" id="" placeholder='Email' className='form-control mx-2'/>
                                </div>
                                <div>
                                    <textarea name="" id="" className='form-control my-5 me-2' placeholder='Comments'></textarea>
                                </div>
                                <div>
                                    <button type="button" className='button'>Post Comment</button>
                                </div>
                            </form>
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

export default Singleblog