import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Img from "../../assets/Image3.jpg"
import Trip from '../Trip/Trip';
import Footer from '../Footer/Footer';

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
            <Trip></Trip>
            <Footer></Footer>
        </div>
    );
};

export default Service;