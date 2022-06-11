import React from 'react';
import { Carousel } from 'react-bootstrap';
import error3 from '../../Assets/images/error3.jpeg';
import error2 from '../../Assets/images/error2.jpg';
import error1 from '../../Assets/images/error1.jpg';
import Footer from '../../Shared/Footer';

const NotFound = () => {
    return (
     <div className='my-5'>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block img-fluid w-100"
      src={error3}
      alt="First slide"
    />
    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block img-fluid w-100"
      src={error2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-fluid w-100"
      src={error1}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
<div className='mt-5'>
    <Footer></Footer>
</div>
     </div>
    );
};

export default NotFound;