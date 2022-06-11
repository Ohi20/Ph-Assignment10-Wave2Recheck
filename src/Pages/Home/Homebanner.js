import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../Home/Homebanner.css';

const Homebanner = () => {
    return (
        <div>
                     <Card className="text-center border-white text-white">
  <Card.Header className='text-uppercase banner-title bg-white'>John Leader</Card.Header>
  <Card.Body>
    <Card.Title className='banner-title'>THE RIGHT LAWYER</Card.Title>
    <Card.Text className='banner-title'>
    MAKES ALL THE DIFFERENCE
    </Card.Text>
    <Button className='text-uppercase font-bold' variant="primary">Explore</Button>
  </Card.Body>
  </Card>
        </div>
    );
};

export default Homebanner;