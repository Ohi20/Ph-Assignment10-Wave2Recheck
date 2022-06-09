import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <h2 className=' text-center my-3'>KimberlyLaw</h2>
            
            <div className='d-flex justify-content-center'>
            <nav class="navbar navbar-expand-lg navbar-light ">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
       <Link class="nav-item nav-link btn-primary rounded mx-2 text-white font-weight-bold" to="/">Home</Link>
       <Link class="nav-item nav-link btn-primary rounded mx-2 text-white font-weight-bold" to="/services">Services</Link>
       <Link class="nav-item nav-link btn-primary rounded mx-2 text-white font-weight-bold" to="/checkout">Checkout </Link>
       <Link class="nav-item nav-link btn-primary rounded mx-2 text-white font-weight-bold" to="/blogs">Blogs</Link>  
       <Link class="nav-item nav-link btn-primary rounded mx-2 text-white font-weight-bold" to="/login">Login</Link> 
       <Link class="nav-item nav-link" to="*"></Link>
    </div>
  </div>
</nav>
           

           
            </div>
        </div>
    );
};

export default Header;