import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Destination from '../Destination/Destination';
import Trip from '../Trip/Trip';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80"
                title="Your Journey Your Story"
                text="Choose Your Favorite Destination"
                url="/"
                btnClass="show"
                buttonText="Travel Plan"
            >
            </Hero>
            <Destination></Destination>
            <Trip></Trip>
        </div>
    );
};

export default Home;