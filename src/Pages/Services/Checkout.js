import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import '../Services/Services.css';


const Checkout = () => {

    const submit = () =>{
        <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
        </div>
    }

    const noload = (event) => {
        event.preventDefault();
    }

    return (
        <div>

        <div className='services-sec my-5'>
            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height="100px" width="100px" className='img-fluid' src="https://www.smudailycampus.com/wp-content/uploads/2020/01/63393.jpg" />
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
  <Card.Img variant="top" height="100px" width="100px" className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6px7frCg9sngtnOybVm15cNL-a4YOws3qdLsQOlKsvjkNFehKsGndBrPMvmoUKIDhGs&usqp=CAU" />
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
  <Card.Img variant="top" className='img-fluid w-100' src="https://ggrmlawfirm.com/wp-content/uploads/2020/01/wrongful-death.jpg" />
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
  {/* <Card.Img variant="top" className='img-fluid w-100' src="https://valientemott.com/wp-content/uploads/2019/12/Crazy-Car-Accident.jpg" /> */}
  <div>
  <img src="https://valientemott.com/wp-content/uploads/2019/12/Crazy-Car-Accident.jpg" class="img-fluid rounded-start" alt="..."/>
        </div>
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
  {/* <Card.Img variant="top" height={'100px'} width={'100px'} className='img-fluid' src="https://media.istockphoto.com/photos/bankruptcy-document-with-wooden-gavel-picture-id915254108?k=20&m=915254108&s=612x612&w=0&h=VueEe_cqv8OFdfJZMGlYdyBqz3BarQQ4yH1AFb1-IA4=" /> */}
  <div>
            <img height="300px" width="300px" className='img-fluid' src='https://media.istockphoto.com/photos/bankruptcy-document-with-wooden-gavel-picture-id915254108?k=20&m=915254108&s=612x612&w=0&h=VueEe_cqv8OFdfJZMGlYdyBqz3BarQQ4yH1AFb1-IA4=' alt=''></img>
        </div>
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
  {/* <Card.Img variant="top" className='img-fluid' src="https://mumbaimirror.indiatimes.com/photo/77057592.cms" /> */}
  <div>
            <img height="300px" width="300px" className='img-fluid' src='https://mumbaimirror.indiatimes.com/photo/77057592.cms' alt=''></img>
        </div>
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


     <div className='my-3'>

     <div class="wrapper fadeInDown pt-3">
<div id="formContent">
 
  <div class="fadeIn first pt-4">
  <button type="button" class="btn btn-primary position-relative">
  Who is There?
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">Nice</span>
  </span>
</button>
  </div>

  
  <form onSubmit={noload}>
    <input type="text" id="login" class="fadeIn second my-2" name="login" placeholder="Your Name"/>
    <input type="text" id="password" class="fadeIn third my-2" name="login" placeholder="Phone Number"/>
    <div className=' d-flex justify-content-center align-items-center'>
    <input onClick={submit} type="submit" class="fadeIn fourth" value="Submit"/>
    </div>
  </form>

  
  <div id="formFooter">
    <Link className="underlineHover" to="/login">Login</Link>  
  </div>

</div>
</div>
        </div>

        <Footer></Footer>
        </div>
    );
};

export default Checkout;