import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Home/Homebanner.css';

const Homebanner = () => {

  let navigate = useNavigate();

    return (
        <div>

    <Card className="text-center border-white text-white">
  <Card.Header className='text-uppercase banner-title bg-white'>John Leader</Card.Header>
  <Card.Body>
    <Card.Title className='banner-title'>THE RIGHT LAWYER</Card.Title>
    <Card.Text className='banner-title'>
    MAKES ALL THE DIFFERENCE
    </Card.Text>
    <div className='banner-btn-div'>
    <button onClick={() => navigate('/checkout')} className='text-uppercase font-bold banner-button' variant="primary">Explore</button>
    </div>
  </Card.Body>
  </Card>

      </div>
    );
};

export default Homebanner;