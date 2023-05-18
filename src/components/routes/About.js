import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Img from "../../assets/Image1.jpg"
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero
                cName="hero-mid"
                heroImg={Img}
                title="About"
                btnClass="hidden"
            >
            </Hero>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default About;