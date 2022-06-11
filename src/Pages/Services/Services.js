import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../../Pages/Services/Services.css';

const Services = () => {
    return (
        <div className='services-sec my-5'>
            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='img-fluid' src="https://www.smudailycampus.com/wp-content/uploads/2020/01/63393.jpg" />
  <Card.Body>
    <Card.Title>Personal Injury</Card.Title>
    <Card.Text>
    The term “personal injury” encompasses a broad range of injuries. Some are minor, but some injuries can be catastrophic and life-changing.
    </Card.Text>
    <p>Price:$200 </p>
    <Button>Get started</Button>
    </Card.Body>
</Card>
            </div>

            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6px7frCg9sngtnOybVm15cNL-a4YOws3qdLsQOlKsvjkNFehKsGndBrPMvmoUKIDhGs&usqp=CAU" />
  <Card.Body>
    <Card.Title>Defective Roadway</Card.Title>
    <Card.Text>
    Many things can contribute to a highway crash, including a possible defective roadway.
    </Card.Text>
    <p>Price:$300 </p>
    <Button>Get started</Button>
    </Card.Body>
</Card>
            </div>

            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='img-fluid' src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Wrongful Death</Card.Title>
    <Card.Text>
    Losing a loved one is always difficult. Losing someone to a tragedy can be especially traumatic. An experienced wrongful death lawyer will help guide you through this challenging time.
    </Card.Text>
    <p>Price:$200 </p>
    <Button>Get started</Button>
    </Card.Body>
</Card>
            </div>

                 <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='img-fluid' src="https://valientemott.com/wp-content/uploads/2019/12/Crazy-Car-Accident.jpg" />
  <Card.Body>
    <Card.Title>Vehicle Accidents</Card.Title>
    <Card.Text>
    A number of factors contribute to the risk of collisions, including vehicle design, speed of operation, road design, weather, road environment, driving skills, impairment due to alcohol or drugs, and behavior, notably aggressive driving, distracted driving, speeding and street racing.
    </Card.Text>
    <p>Price:$400 </p>
    <Button>Get started</Button>
    </Card.Body>
</Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='img-fluid' src="https://media.istockphoto.com/photos/bankruptcy-document-with-wooden-gavel-picture-id915254108?k=20&m=915254108&s=612x612&w=0&h=VueEe_cqv8OFdfJZMGlYdyBqz3BarQQ4yH1AFb1-IA4=" />
  <Card.Body>
    <Card.Title>Bankruptcy</Card.Title>
    <Card.Text>
    Bankruptcy is a legal proceeding involving a person or business that is unable to repay their outstanding debts. The bankruptcy process begins with a petition filed by the debtor, which is most common, or on behalf of creditors, which is less common.
    </Card.Text>
    <p>Price:$300 </p>
    <Button>Get started</Button>
    </Card.Body>
</Card>
            </div>

            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='img-fluid' src="https://mumbaimirror.indiatimes.com/photo/77057592.cms" />
  <Card.Body>
    <Card.Title>Consumer Protection</Card.Title>
    <Card.Text>
    Consumer protection is the practice of safeguarding buyers of goods and services, and the public, against unfair practices in the marketplace. Consumer protection measures are often established by law
    </Card.Text>
    <p>Price:$400 </p>
    <Button>Get started</Button>
    </Card.Body>
</Card>
            </div>
            
            
        </div>
    );
};

export default Services;