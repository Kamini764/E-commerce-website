import React from 'react';
import { Link } from 'react-router-dom';

const Title = (props) => {
    const {title} =props;
  return (
    <> 
      <div className="Title mb-0 py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                 <div className="text-center mb-0">
                  <p>
                    {/* <Link to='/' className='text-dark'> */}
                      Home &nbsp;
                    {/* </Link> */}
                    / {title}
                  </p> 
                </div>
             </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Title