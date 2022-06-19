import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

    let navigate = useNavigate();
        
    return (
        <div className='my-5'>
            <div>
                <h2 className='text-center mb-3'>Top Categories</h2>
            </div>
            <div className='services-sec d-grid col-sm-1'>
            <div>
            <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" className='img-fluid' src="https://www.smudailycampus.com/wp-content/uploads/2020/01/63393.jpg" /> */}
        <div>
            <img height="300px" width="300px" className='img-fluid' src='https://www.smudailycampus.com/wp-content/uploads/2020/01/63393.jpg' alt=''></img>
        </div>
  <Card.Body>
    <Card.Title>Personal Injury</Card.Title>
    <Card.Text>
    The term “personal injury” encompasses a broad range of injuries. Some are minor, but some injuries can be catastrophic and life-changing.
    </Card.Text>
    <p>Price:$200 </p>
    
    </Card.Body>
    <div>
    <Button onClick={() => navigate('/checkout')}>Get started</Button>
    </div>
</Card>
            </div>

            <div>
            <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6px7frCg9sngtnOybVm15cNL-a4YOws3qdLsQOlKsvjkNFehKsGndBrPMvmoUKIDhGs&usqp=CAU" /> */}
  <div>
            <img height="300px" width="300px" className='img-fluid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6px7frCg9sngtnOybVm15cNL-a4YOws3qdLsQOlKsvjkNFehKsGndBrPMvmoUKIDhGs&usqp=CAU' alt=''></img>
        </div>
  <Card.Body>
    <Card.Title>Defective Roadway</Card.Title>
    <Card.Text>
    Many things can contribute to a highway crash, including a possible defective roadway.
    </Card.Text>
    <p>Price:$300 </p>
   
    </Card.Body>
    <div>
    <Button onClick={() => navigate('/checkout')}>Get started</Button>
    </div>
</Card>
            </div>

            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='img-fluid w-100' src="https://ggrmlawfirm.com/wp-content/uploads/2020/01/wrongful-death.jpg" />
  <Card.Body>
    <Card.Title>Wrongful Death</Card.Title>
    <Card.Text>
    Losing a loved one is always difficult. Losing someone to a tragedy can be especially traumatic. An experienced wrongful death lawyer will help guide you through this challenging time.
    </Card.Text>
    <p>Price:$200 </p>
    <div>
    <Button onClick={() => navigate('/checkout')}>Get started</Button>
    </div>
    </Card.Body>
</Card>
            </div>
        </div>
        </div>
    );
};

export default Categories;