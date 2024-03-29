import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {

  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  }

    return (
        <div >
            <div className='text-center my-3'>
            <h2 className='header-title text-lg'>KimberLaw</h2>
            </div>
            <div className='d-flex justify-content-center'>
            <nav class="navbar navbar-expand-lg navbar-light ">
  {/* navbarNavAltMarkup navbarNavAltMarkup*/}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  

  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
       <Link class="nav-item  menu-ul rounded mx-2 text-white font-weight-bold" to="/">Home</Link>
       {/* <Link class="nav-item  menu-ul rounded mx-2 text-white font-weight-bold" to="/services">Services</Link> */}
       <Link class="nav-item  menu-ul rounded mx-2 text-white font-weight-bold" to="/checkout">Checkout </Link>
       <Link class="nav-item  menu-ul rounded mx-2 text-white font-weight-bold" to="/blogs">Blogs</Link>  
       <Link class="nav-item  menu-ul rounded mx-2 text-white font-weight-bold" to="/aboutme">AboutMe</Link> 
       
       <span >{user ?  <button className='btn btn-danger' onClick={logout} >Sign Out</button> : <Link class="nav-item nav-link menu-ul rounded mx-2 text-white font-weight-bold" to="/login">Login</Link>}</span> 
       <Link class="nav-item nav-link" to="*"></Link>
    </div>
  </div>
</nav>
           

           
            </div>
        </div>
    );
};

export default Header;