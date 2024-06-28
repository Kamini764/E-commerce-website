import React from 'react';
import "../footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCoffee,faGlobe,faHeart, faLanguage, faPerson, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
     <footer className='footer'>
      <div className="container-fluid" style={{backgroundColor:"black",color:"white",height:"400px"}}>
        <div className="row">
          <div className="col-md-3">
          <h4 >My Account</h4>
          <span className="icon">          
          <a href=''><FontAwesomeIcon icon={faHeart} size={'2x'}/><i>Wish-List</i></a>
          <a href='' ><FontAwesomeIcon icon={faCartShopping} size={'2x'} /><i>Cart</i></a>
          <a href='' ><FontAwesomeIcon icon={faUser} size={'2x'} /><i>Profile</i></a>
          <a href=''><FontAwesomeIcon icon={faGlobe} size={'2x'} /><i>Language</i></a>
          </span>
          </div>
          <div className="col-md-3" >
           <h4>Information</h4>
           <div class="avalue">
           <Link to='/privacypolicy'>Privacy Policy</Link> 
           <Link to='/refundpolicy'>Refund Policy</Link>   
           <Link to='/shippingpolicy'>Shipping Policy</Link>   
           <Link to='/termsofservices'>Terms of Services</Link>   
           <Link to=''>Tags</Link>    
            </div>
          </div>
          <div className="col-md-3 avalue" >
          <h4>Connect with Us</h4>
          <a href='https:instagram.com/mona_sharma9058?igshid=MzNINGNkzWQ4Mg=='>Instagram</a>
          <a href=''>Facebook</a>
          <a href=''>Twitter</a>
            </div>
            <div className="col-md-3 avalue" >
              <h4>Let Us Help You</h4>
                <a href='#'>COVID-19 and Online Shopping</a>
                <a href='#'>Your Account</a>
                <a href='#'>Returns Centre</a>
                <a href='#'>100% Purchase Protection</a>
                <a href='#'>Amazon App Download</a>
                <a href='#'>Help</a>
               </div>
        </div>
      </div>
     </footer>
    </div>
  )
}

export default Footer