import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Img from "../../assets/Image3.jpg"

const Service = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero
                cName="hero-mid"
                heroImg={Img}
                title="Service"
                btnClass="hidden"
            >
            </Hero>
        </div>
    );
};

export default Service;