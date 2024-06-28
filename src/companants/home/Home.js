import React from "react";
import { Link } from "react-router-dom";
import "../home/home.css";
import Marquee from "react-fast-marquee";
import Card from "../home/Card";
import Product2 from "../home/product2";
import ReactStars from 'react-rating-stars-component';
import Seriescard from "./Seriescard";
import Special from "./Special";

const Home = () => {

  return (
    < div>
       <section className="home-wrapper-1 py-5">
            <div className="container-fluid">
              <div className="row">
              <div className="col-md-6">
                 <div className="main-banner p-3" >
                 <img style={{width:"100%"}} src="image/main1-2.jpg" alt="main-image"  className="img-fluid-rounded-3"/>
                 <div className="main-banner-content">
                  <h6> SUPER FOR PROS</h6>
                  <h2>iPad S13+Pro.</h2>
                  <p>From $999.00 or $41.62/ma <br />
                  for 24 ma Footnode</p>
                  <Link className="button" style={{textDecoration:"none"}}>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="small">
          <div className="small-banner" >
                 <img style={{width:"310px",marginTop:"6%"}} src="image/laptop1.jpg" alt="small-image"  className="img-fluid-rounded-3 "/>
                 <div className="small-banner-content">
                  <h6> Best Sale</h6>
                  <h3>Laptops Max</h3>
                  <p>From $999.00 or $41.62/ma <br />
                  for 24 ma Footnode</p>
               </div>
             </div>
             <div className="small-banner " >
                 <img style={{width:"310px",marginTop:"5% "}} src="image/headphone.jpg" alt="small-image"  className="img-fluid-rounded-3"/>
                 <div className="small-banner-content">
                  <h6>20% Off</h6>
                  <h3>AirPods Max</h3>
                  <p>From $999.00 or $41.62/ma <br />
                  for 24 ma Footnode</p>
              </div>
            </div>
             <div className="small-banner " >
                 <img style={{width:"310px",marginTop:"10%"}} src="image/ipad2.jpg" alt="small-image"  className="img-fluid-rounded-3"/>
                 <div className="small-banner-content">
                  <h6> New Arrival</h6>
                  <h3>Buy Ipad Air</h3>
                  <p>From $999.00 or $41.62/ma <br />
                  for 24 ma Footnode</p>
              </div>
          </div>
          <div className="small-banner" >
                 <img style={{width:"310px",marginTop:"5% "}} src="image/watch.webp" alt="small-image"  className="img-fluid-rounded-3"/>
                 <div className="small-banner-content">
                  <h6>15% Off</h6>
                  <h3>Smartwatch 7</h3>
                  <p>From $999.00 or $41.62/ma <br />
                  for 24 ma Footnode</p>
              </div>
        </div>
       </div>
       </div>
       </div>
       </div>
    </section>
    <section className="home-wrapper-2 py-3" style={{backgroundColor:"#f5f5f7"}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
               <div className="section2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-item-center gap-15">
                  <img src="image/services1.PNG" alt="services" />
                  <div>
                  <h6>Free Shipping</h6>
                  <p>From all orders over $500</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src="image/services2.PNG" alt="services" />
                  <div>
                  <h6>Daily Surprise Offers</h6>
                  <p>Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src="image/services3.PNG" alt="services" />
                  <div>
                  <h6>Support 24/7</h6>
                  <p>Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src="image/services4.PNG" alt="services" />
                  <div>
                  <h6>Affordable Prices</h6>
                  <p>Get factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src="image/services5.PNG" alt="services" />
                  <div>
                  <h6>Secure Payments</h6>
                  <p>100% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
     </div>
    </section>
    <section className="home-wrapper-3 py-5" style={{backgroundColor:"#f5f5f7"}}>
       <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="catagories d-flex align-items-center justify-content-between flex-wrap bg-white">
              <div className="d-flex gap-15 align-items-center mb-5 ">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 items</p>
                </div>
                <img src="image/camera.jpg" alt="" />
              </div>
              <div  className="d-flex gap-15 align-items-center mb-5">
                <div>
                  <h6>Headphones</h6>
                  <p>16 items</p>
                </div>
                <img src="image/headphone3.jpg" alt="" />
              </div>
              <div  className="d-flex gap-15 align-items-center mb-5">
                <div>
                  <h6>Smart TV</h6>
                  <p>12 items</p>
                </div>
                <img src="image/tv.jpg" alt="" />
              </div>
              <div  className="d-flex gap-15 align-items-center mb-5">
                <div>
                  <h6> Mobile & Laptops</h6>
                  <p> 20 items</p>
                </div>
                <img src="image/mobile.jpg" alt="" />
              </div>
              <div  className="d-flex gap-15 align-items-center mb-5">
                <div>
                  <h6>Speakers</h6>
                  <p>14 items</p>
                </div>
                <img src="image/speaker.jpg" alt="" />
              </div>
              <div  className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 items</p>
                </div>
                <img src="image/camera.jpg" alt="" />
              </div>
              <div  className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>16 items</p>
                </div>
                <img src="image/headphone3.jpg" alt="" />
              </div>
              <div  className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>12 items</p>
                </div>
                <img src="image/tv.jpg" alt="" />
              </div>
              <div  className="d-flex gap-15 align-items-center">
                <div>
                  <h6> Mobile & Laptops</h6>
                  <p> 20 items</p>
                </div>
                <img src="image/mobile.jpg" alt="" />
              </div>
              <div  className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Speakers</h6>
                  <p>14 items</p>
                </div>
                <img src="image/speaker.jpg" alt="" />
              </div>
            </div>
           </div>
        </div>
       </div>
    </section>
    <section className="home-wrapper-4 py-5" style={{backgroundColor:"#f5f5f7"}}>
      <div className="container">
        <div className="row">
           <div className="col-md-12">
             <div className="marquee-wrapper d-flex " style={{backgroundColor:"white"}}>
               <Marquee>
                 <div className="mx-5 w-95 p-5">
                  <img src="image/brand2.jpg" alt="brand" />
                 </div>
                 <div className="mx-5 w-95 p-5">
                  <img src="image/brand3.jpg" alt="brand" />
                 </div>
                 <div className="mx-5 w-95 p-5">
                  <img src="image/brand4.jpg" alt="brand" />
                 </div>
                 <div className="mx-5 w-95 p-5">
                  <img src="image/brand5.jpg" alt="brand" />
                 </div>
                 <div className="mx-5 w-95 p-5">
                  <img src="image/brand6.jpg" alt="brand" />
                 </div>
               </Marquee>
               
             </div>
               
            </div>
          </div>
        </div>
    </section>

    <section className="home-wrapper-4 py-5" style={{backgroundColor:"#f5f5f7"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Featured Products</h3>
          </div>
          <div className="row">
            <div className=" col-md-3">
              <Product2 my_img="image/productcard2.jpg"  brand="Sony" title="Camera Bulk 10 Pack For students" 
              desc="Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur, perferendis voluptatibus magnam 
              doloribus necessitatibus blanditiis ullam consectetur similique optio." price="$100"/>
            </div>
            <div className=" col-md-3">
              <Product2 my_img="image/productcard3.jpg"  brand="Havels" title="Mobile Bulk 16 Pack For students" 
              desc="Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur, perferendis voluptatibus magnam 
              doloribus necessitatibus blanditiis ullam consectetur similique optio." price="$100"/>
            </div>
            <div className=" col-md-3">
              <Product2 my_img="image/productcard2.jpg"  brand="Havels" title="Camera Bulk 10 Pack For students" 
              desc="Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur, perferendis voluptatibus magnam 
              doloribus necessitatibus blanditiis ullam consectetur similique optio." price="$100"/>
            </div>
            <div className=" col-md-3">
              <Product2 my_img="image/productcard3.jpg"  brand="Sony" title="Mobile Bulk 16 Pack For students" 
              desc="Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur, perferendis voluptatibus magnam 
              doloribus necessitatibus blanditiis ullam consectetur similique optio." price="$100"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="home-wrapper-4 py-5" style={{backgroundColor:"#f5f5f7"}}>
       <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Seriescard/>
          </div>
          <div className="col-md-4">
            <Seriescard/>
          </div>
          <div className="col-md-4">
            <Seriescard/>
          </div>
        </div>
       </div>
    </section>

    <section className="home-wrapper-4 py-5" style={{backgroundColor:"#f5f5f7"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Special/>
          </div>
          <div className="col-md-6">
            <Special/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <Special/>
          </div>
          <div className="col-md-6">
            <Special/>
          </div>
        </div>
      </div>
    </section>

    <section className="home-wrapper-4 py-5"style={{backgroundColor:"#f5f5f7"}} > 
      <div className="container">
       <div className="row">
        <div className="col-md-12">
          <h3>Our Latest Blogs</h3>
        </div>
        <div className="row">
           <div className="col-md-3">
           <Card/>
           </div>
           <div className="col-md-3">
           <Card/>
           </div>
           <div className="col-md-3">
           <Card/>
           </div>
           <div className="col-md-3">
           <Card/>
           </div>
        </div>
        </div>
       </div>
    </section>
  </div>
  )
}

export default Home