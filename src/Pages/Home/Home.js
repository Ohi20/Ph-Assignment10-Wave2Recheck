import React from 'react';
import Footer from '../../Shared/Footer';
import Homebanner from './Homebanner';


const Home = () => {
    return (
        <div className='my-3'>
            <Homebanner></Homebanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;