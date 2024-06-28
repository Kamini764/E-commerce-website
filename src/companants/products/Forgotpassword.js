import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../ourstore/Title';

const Forgotpassword = () => {
  return (
    <div>
       <Title title="Log In"/>
      <div className="login-wrapper py-5" style={{backgroundColor:"#f5f5f7"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="autho-card">
              <h3 className='text-center my-4'>Reset Your Password</h3>
              <form action="post" className = "d-flex flex-column gap-15">
              <p className='ms-5'>We will sent you an email to set your password</p>
                <div>
                  <input type="email" name="email" id="" placeholder='Email' className='form-control' style={{width:"100%"}}/>
                </div>
                <div className='d-flex justify-content-cemter flex-column align-items-center gap-15'>
                  <button type="button" className='button text-center'>Submit</button>
                   <Link to='/login' style={{textDecoration:"none",color:"black"}}>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Forgotpassword