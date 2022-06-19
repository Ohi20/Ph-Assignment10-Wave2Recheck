import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-uppercase">Call US</h5>
                <p>+8801622354928</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Shortcuts</h5>
                <ul className="list-unstyled">
                    <li>Services</li>
                    <li>Checkout</li>
                    <li>Login</li>
                    <li>SignUp</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Ourselves</h5>
                <ul className="list-unstyled">
                    <li>AboutUs</li>
                    <li>Contact</li>
                    <li>Blogs</li>
                    <li>Address</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></span> 2022 Copyright:
        John Leader
    </div>

</footer>
    );
};

export default Footer;