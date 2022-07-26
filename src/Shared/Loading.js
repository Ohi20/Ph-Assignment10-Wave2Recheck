import React from 'react';

const Loading = () => {
    return (
       <div className='text-center my-5'>
         <div className="spinner-grow " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className='d-flex justify-content-center align-items-center my-5'>
        <h2 className='fs-3 text-dark'>Loading Please Wait!</h2>
      </div>
       </div>
    );
};

export default Loading;