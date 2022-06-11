import React from 'react';
import { Card } from 'react-bootstrap';
import me2 from "./../../Assets/images/me2.png";
import Footer from '../../Shared/Footer';

const Aboutme = () => {
    return (
        <div className='my-5'>
        <div className='mb-5'>
            <Card className="text-center">
  <Card.Header>About Me</Card.Header>
  <Card.Body>
    <Card.Title>Shahed Ashraf Ohi</Card.Title>
    <img className='img-fluid w-25' src={me2} alt=''></img>
    <Card.Text>
    As a Web developer, I want to be able to design Web pages and also code that can effectively display material, provide interactivity, and be artistically pleasing to the user. In order to do this, I need to know the nuances of Web developing and delivery and the various tools and software applications i can use.My goal is to be updated that i can do any kind of work. I want to create a new startup someday. That's why i am trying my best to reach there.
    </Card.Text>
    
  </Card.Body>
  
</Card>
            </div>
        <Footer></Footer>    
        </div>
    );
};

export default Aboutme;