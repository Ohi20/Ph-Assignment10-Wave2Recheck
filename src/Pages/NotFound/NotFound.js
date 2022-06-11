import React from 'react';
import { Carousel } from 'react-bootstrap';
import error3 from '../../Assets/images/error3.jpg';
import error2 from '../../Assets/images/error2.png';
import error1 from '../../Assets/images/error1.jpg';
import Footer from '../../Shared/Footer';

const NotFound = () => {
    return (
     <div className='my-5'>
            <Carousel>
  
  <Carousel.Item>
    <div className='d-flex justify-content-center align-items-center'>
    <img height="200px" width="300px"
      className="img-fluid"
      src={error3}
      alt="First slide"
    />
    </div>
    
  </Carousel.Item>
  
  <Carousel.Item>
    <div className='d-flex justify-content-center align-items-center'>
    <img height="200px" width="300px"
      className="img-fluid"
      src={error2}
      alt="Second slide"
    />
    </div>

    
  </Carousel.Item>
  <Carousel.Item>
   <div className='d-flex justify-content-center align-items-center'>
   <img height="200px" width="300px"
      className="img-fluid"
      src={error1}
      alt="Third slide"
    />
   </div>

    
  </Carousel.Item>
</Carousel>
<div className='mt-5'>
    <Footer></Footer>
</div>
     </div>
    );
};

export default NotFound;