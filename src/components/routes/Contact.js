import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Img from "../../assets/Image2.jpg"
import Footer from '../Footer/Footer';
import ContactFrom from '../ContactForm/ContactFrom';

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
            <ContactFrom></ContactFrom>
            <Footer></Footer>
        </div>
    );
};

export default Contact;