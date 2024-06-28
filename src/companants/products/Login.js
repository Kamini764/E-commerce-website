import React from 'react';
import Title from '../ourstore/Title';
import { Link } from 'react-router-dom';
import product from '../products/product.css';

const Login = () => {
  return (
    <div>
      <Title title="Log In"/>
      <div className="login-wrapper py-5" style={{backgroundColor:"#f5f5f7"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="autho-card">
              <h3 className='text-center my-4'>Log In</h3>
              <form action="post" className = "d-flex flex-column gap-30">
                <div>
                  <input type="email" name="email" id="" placeholder='Email' className='form-control'/>
                </div>
                <div>
                  <input type="number" name="password" id="" className='form-control' placeholder='Password' />
                </div>
                <div>
                  <Link to='/forgot-password' className='fpass'style={{textDecoration:"none"}}>Forgot password?</Link>
                </div>
                <div>
                  <button type="button" className='button border-0px'>Log In</button>
                  <Link to ='/cart' className='button' style={{marginLeft:"210px",textDecoration:"none"}}>Sign Up</Link>
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

export default Login