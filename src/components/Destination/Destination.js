import React from 'react';
import "./Destination.css"
import Img1 from "../../assets/Image4.jpg"
import Img2 from "../../assets/Image5.jpg"
import Img3 from "../../assets/Image6.jpg"
import Img4 from "../../assets/Image7.jpg"
import DestinationData from './DestinationData';
const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            <DestinationData
                cName="first-des"
                heading="Beach"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla minima ea similique ullam ducimus cumque recusandae odio non deserunt nam sapiente harum libero fuga inventore, dolorem perspiciatis, assumenda eligendi voluptatum."
                img1={Img1}
                img2={Img2}
            ></DestinationData>
            <DestinationData
                cName="first-des-reverse"
                heading="Mountain"
                text="ullam ducimus cumque recusandae odio non deserunt nam sapiente harum libero fuga inventore, dolorem perspiciatis, assumenda eligendi voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla minima ea similique"
                img1={Img3}
                img2={Img4}
            ></DestinationData>
        </div>
        
        
    );
};

export default Destination;