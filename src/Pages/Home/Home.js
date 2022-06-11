import React from 'react';
import Footer from '../../Shared/Footer';
import Categories from './Categories';
import ExtraSection from './ExtraSection';
import Homebanner from './Homebanner';


const Home = () => {
    return (
        <div className='my-3'>
            <Homebanner></Homebanner>
            <Categories></Categories>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;