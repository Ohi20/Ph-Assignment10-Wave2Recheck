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

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        John Leader
    </div>

</footer>
    );
};

export default Footer;