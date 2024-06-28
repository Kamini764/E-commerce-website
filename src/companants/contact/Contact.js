 import React from 'react';
 import "../contact/contact.css"
import Title from '../ourstore/Title';
import { useState } from 'react';

const Contact = () => {
  const[input,setInput]=useState({
    name:"",
    email:"",
    phone:""
  });

  const handlechange=(event)=>{
    const name = event.target;
    const value  = event.target;
    setInput(values => ({...values, [name]: value}))

  }
  const handleSubmit =(event)=>{
    //  event.preventDefault();
     console.log(input);
  }
  return (
    <div>
      <Title title="Contact-US"/>
      <div className="contact-us-wrapper" style={{backgroundColor:"#f5f5f7"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="my-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56419.04224194347!2d78.05803215935696!3d27.896137848572664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48686459c8b%3A0x95d967276d323613!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1692776471849!5m2!1sen!2sin" 
            width="100%" height="350" style={{border:"0" ,allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="contact-page d-flex align-items-center justify-content-between mb-5"style={{backgroundColor:"white"}}>
                <div className="col-md-6">
                <div className="contact-us-form mt-5 ms-5" >
                  <h3>Contact-US</h3>
                  <div className='form-wrapper'>
                  <form method='' className='my-2' onSubmit={handleSubmit()}>
                     <div class="form-group">
                        <input type="text" class="form-control" name='name'  placeholder="Name"  onChange={handlechange()}/>
                      </div>
                      <div class="form-group">
                        <input type="email" class="form-control" name='email'  placeholder="Email" onChange={handlechange()} />
                      </div>
                      <div class="form-group">
                        <input type="number" class="form-control" name='phone' placeholder="Phone Number" onChange={handlechange()} />
                      </div>
                      <div class="form-group">
                        <textarea name="message" id="" cols="81" rows="3" placeholder='Comments'></textarea>
                      </div>
                      <button type="submit" class="button mb-4">Submit</button>
                    </form>
                  </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="contact-us ">
                <h3>Get in Touch with Us</h3>
                <div className="contact-us-form"></div>
                 <div className='contact-img d-flex gap-10 mt-3'>
                    <img src="image/home.jpg" alt="" />
                    <p>Medical road ,Aligarh</p>
                 </div>
                 <div className='contact-img d-flex gap-10'>
                    <img src="image/phone.jpg" alt="" />
                    <p>+91(897 942 8125)</p>
                 </div>
                 <div className='contact-img d-flex gap-10'>
                    <img src="image/email.jpg" alt="" />
                    <p>satykam763@gmail.com</p>
                 </div>
                 <div className='contact-img d-flex gap-10'>
                    <img src="image/time.jpg" alt="" />
                    <p>Monday-Saturday 09AM-07PM</p>
                 </div>
                 </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}
      
 export default Contact