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
        <div className='my-5'>

 {/* Checkout card starts */}

          
 <div className="card-group  gap-3">

<div className="card shadow-lg rounded-5">
  <img width={'200px'} height={'400px'} src="https://www.smudailycampus.com/wp-content/uploads/2020/01/63393.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title card-headerman">Personal Injury</h5>
    <p class="card-text card-textman">The term “personal injury” encompasses a broad range of injuries. Some are minor, but some injuries can be catastrophic and life-changing.</p>
    <div>
    <p className='card-price'>Price:$200 </p>
    </div>
  </div>
  <div class="card-footer">
  <div className='banner-btn-div'>
    <button className='text-uppercase font-bold banner-button' variant="primary">Proceed</button>
    </div>
  </div>
</div>

<div class="card shadow-lg rounded-5">
  <img width={'200px'} height={'400px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6px7frCg9sngtnOybVm15cNL-a4YOws3qdLsQOlKsvjkNFehKsGndBrPMvmoUKIDhGs&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title card-headerman">Defective Roadway</h5>
    <p class="card-text card-textman">Many things can contribute to a highway crash, including a possible defective roadway.</p>
   <div>
   <p className='card-price'>Price:$300 </p>   
    </div> 
  </div>
  <div class="card-footer">
  <div className='banner-btn-div'>
    <button className='text-uppercase font-bold banner-button' variant="primary">Proceed</button>
    </div>
  </div>
</div>

<div class="card shadow-lg rounded-5">
  <img width={'200px'} height={'400px'} src="https://ggrmlawfirm.com/wp-content/uploads/2020/01/wrongful-death.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title card-headerman">Wrongful Death</h5>
    <p class="card-text card-textman">Losing a loved one is always difficult. Losing someone to a tragedy can be especially traumatic. An experienced wrongful death lawyer will help guide you through this challenging time.</p>
    <div>
    <p className='card-price'>Price:$200 </p>
    </div>
  </div>
  <div class="card-footer">
  <div className='banner-btn-div'>
    <button className='text-uppercase font-bold banner-button' variant="primary">Proceed</button>
    </div>
  </div>
</div>
</div>

<div className="card-group my-4 gap-3">

<div className="card shadow-lg rounded-5">
  <img width={'200px'} height={'400px'} src="https://media.istockphoto.com/photos/auto-accident-involving-two-cars-picture-id451333971?k=20&m=451333971&s=612x612&w=0&h=K-UTRhzkdkgjEjADHxCURBeLn6azvryak0MWCHE7LtQ=" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title card-headerman">Vehicle Accidents</h5>
    <p class="card-text card-textman"> A number of factors contribute to the risk of collisions, including vehicle design, speed of operation, road design, weather, road environment, driving skills, impairment due to alcohol or drugs, and behavior, notably aggressive driving, distracted driving, speeding and street racing.</p>
    <div>
    <p className='card-price'>Price:$400</p>
    </div>
  </div>
  <div class="card-footer">
  <div className='banner-btn-div'>
    <button className='text-uppercase font-bold banner-button' variant="primary">Proceed</button>
    </div>
  </div>
</div>

<div class="card shadow-lg rounded-5">
  <img width={'200px'} height={'400px'} src="https://image.cnbcfm.com/api/v1/image/104799687-rsz_overspend.jpg?v=1585933481" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title card-headerman">Bankruptcy</h5>
    <p class="card-text card-textman">Bankruptcy is a legal proceeding involving a person or business that is unable to repay their outstanding debts. The bankruptcy process begins with a petition filed by the debtor, which is most common, or on behalf of creditors, which is less common.</p>
   <div>
   <p className='card-price'>Price:$300</p>   
    </div> 
  </div>
  <div class="card-footer">
  <div className='banner-btn-div'>
    <button className='text-uppercase font-bold banner-button' variant="primary">Proceed</button>
    </div>
  </div>
</div>

<div class="card shadow-lg rounded-5">
  <img width={'200px'} height={'400px'} src="https://internationaljournalofresearch.files.wordpress.com/2020/07/consumer-protection-bill-2019-features.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title card-headerman">Consumer Protection</h5>
    <p class="card-text card-textman">Consumer protection is the practice of safeguarding buyers of goods and services, and the public, against unfair practices in the marketplace. Consumer protection measures are often established by law.</p>
    <div>
    <p className='card-price'>Price:$400</p>
    </div>
  </div>
  <div class="card-footer">
  <div className='banner-btn-div'>
    <button className='text-uppercase font-bold banner-button' variant="primary">Proceed</button>
    </div>
  </div>
</div>
</div>

{/*  Submit form starts   */}

<div className='my-3'>
<div class="wrapper fadeInDown pt-3">
<div id="formContent">
 
  <div class="fadeIn first pt-4">
<div className='banner-btn-div'>
    <button className='text-uppercase font-bold banner-button' variant="primary">Who are you?
    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">Nice</span>
  </span></button>
    </div>
  </div>

  
  <form onSubmit={noload}>
    <input type="text" id="login" class="fadeIn second my-2" name="login" placeholder="Your Name"/>
    <input type="text" id="password" class="fadeIn third my-2" name="login" placeholder="Phone Number"/>
    <div className=' d-flex justify-content-center align-items-center'>
    <input onClick={submit} type="submit" class="fadeIn fourth banner-button" value="Submit"/>
    </div>
  </form>

  
  <div id="formFooter">
    <Link className="underlineHover login" to="/login">Login</Link>  
  </div>

</div>
</div>
        </div>

        <Footer></Footer>
        </div>
    );
};

export default Checkout;