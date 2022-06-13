import React from 'react';
import { Card } from 'react-bootstrap';
import '../Home/ExtraSection.css';

const ExtraSection = () => {
    return (
        <div className='my-5'>
        <h2 className='text-center'>Good To See You</h2>
        <h2 className='text-center mb-3'>Have a coffee</h2>
        <div>
        <Card className="text-center d-flex justify-content-center align-items-center">
        <div>
            <div class="container">
                <div class="coffee-header">
                    <div class="coffee-header__buttons coffee-header__button-one"></div>
                    <div class="coffee-header__buttons coffee-header__button-two"></div>
                    <div class="coffee-header__display"></div>
                    <div class="coffee-header__details"></div>
                </div>
                <div class="coffee-medium">
                    <div class="coffe-medium__exit"></div>
                    <div class="coffee-medium__arm"></div>
                    <div class="coffee-medium__liquid"></div>
                    <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
                    <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
                    <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
                    <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
                    <div class="coffee-medium__cup"></div>
                </div>
                <div class="coffee-footer"></div>
                </div>
            </div>
</Card>
        </div>
    </div>
    );
};

export default ExtraSection;