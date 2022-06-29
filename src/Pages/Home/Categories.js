import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Home/Categories.css';


const Categories = () => {

    let navigate = useNavigate();
        
    return (
        <div className='my-5'>
            <div className='text-center'>
                <h2 className='mb-3 category-title'>Top Categories</h2>
            </div>

            <div>

            <div className="card-group  gap-3">

  <div className="card shadow-lg rounded-5">
    <img src="https://www.smudailycampus.com/wp-content/uploads/2020/01/63393.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title card-headerman">Personal Injury</h5>
      <p class="card-text card-textman">The term “personal injury” encompasses a broad range of injuries. Some are minor, but some injuries can be catastrophic and life-changing.</p>
      <div>
      <p className='card-price'>Price:$200 </p>
      </div>
    </div>
    <div class="card-footer">
    <div className='banner-btn-div'>
    <button onClick={() => navigate('/checkout')} className='text-uppercase font-bold banner-button' variant="primary">Proceed</button>
    </div>
    </div>
  </div>

  <div class="card shadow-lg rounded-5">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6px7frCg9sngtnOybVm15cNL-a4YOws3qdLsQOlKsvjkNFehKsGndBrPMvmoUKIDhGs&usqp=CAU" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title card-headerman">Defective Roadway</h5>
      <p class="card-text card-textman">Many things can contribute to a highway crash, including a possible defective roadway.</p>
     <div>
     <p className='card-price'>Price:$300 </p>   
      </div> 
    </div>
    <div class="card-footer">
    <div className='banner-btn-div'>
    <button onClick={() => navigate('/checkout')} className='text-uppercase font-bold banner-button' variant="primary">Proceed</button>
    </div>
    </div>
  </div>

  <div class="card shadow-lg rounded-5">
    <img src="https://ggrmlawfirm.com/wp-content/uploads/2020/01/wrongful-death.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title card-headerman">Wrongful Death</h5>
      <p class="card-text card-textman">Losing a loved one is always difficult. Losing someone to a tragedy can be especially traumatic. An experienced wrongful death lawyer will help guide you through this challenging time.</p>
      <div>
      <p className='card-price'>Price:$200 </p>
      </div>
    </div>
    <div class="card-footer">
    <div className='banner-btn-div'>
    <button onClick={() => navigate('/checkout')} className='text-uppercase font-bold banner-button' variant="primary">Proceed</button>
    </div>
    </div>
  </div>
</div>

 </div>

        </div>
    );
};

export default Categories;