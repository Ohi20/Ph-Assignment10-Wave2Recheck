import React from 'react';
import Footer from '../../Shared/Footer';
import Categories from './Categories';
import Homebanner from './Homebanner';


const Home = () => {
    return (
        <div className='my-3'>
            <Homebanner></Homebanner>
            <Categories></Categories>
            <Footer></Footer>
        </div>
    );
};

export default Home;