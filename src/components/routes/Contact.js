import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Img from "../../assets/Image2.jpg"

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero
                cName="hero-mid"
                heroImg={Img}
                title="Contact"
                btnClass="hidden"
            >
            </Hero>
        </div>
    );
};

export default Contact;