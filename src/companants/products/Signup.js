import React from 'react';
import Title from '../ourstore/Title';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
    <Title title="Sign Up"/>
    <div className="login-wrapper py-5" style={{backgroundColor:"#f5f5f7"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="autho-card">
            <h3 className='text-center my-4'>Create Account</h3>
            <form action="post" className = "d-flex flex-column gap-30">
              <div>
                <input type="text" name="firstname" id="" placeholder='First Name' className='form-control'/>
              </div>
              <div>
                <input type="text" name="lastname" id="" className='form-control' placeholder='Last Name' />
              </div>
              <div>
                <input type="email" name="email" id="" placeholder='Email' className='form-control'/>
              </div>
              <div>
                <input type="number" name="password" id="" className='form-control' placeholder='Password' />
              </div>
              <div>
                <button type="button" className='button' style={{marginLeft:"40%"}}>Create</button>
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

export default Signup