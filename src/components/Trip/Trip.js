import React from 'react';
import "./Trip.css"
import TripData from './TripData';
import img1 from "../../assets/Image8.jpg"
import img2 from "../../assets/Image9.jpg"
import img3 from "../../assets/Image10.jpg"
const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You Can discover unique destinations on google map</p>
            <div className='trip-card'>
                <TripData
                    image={img1}
                    heading="Cox Bazar"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus esse omnis, aut impedit aliquid reprehenderit optio quis, nisi dolores fuga, delectus hic sed consequatur tempora corporis voluptatibus ipsa eum similique"
                ></TripData>
                <TripData
                    image={img2}
                    heading="Jaflong"
                    text="enderit optio quis, nisi dolores fuga, delectus hic sed consequatur tempora corporis voluptatibus ipsa eum similique Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus esse omnis, aut impedit aliquid repreh"
                ></TripData>
                <TripData
                    image={img3}
                    heading="Bandarban"
                    text="cing elit. Possimus esse omnis, aut impedit aliquid reprehenderit optio quis, nisi dolores fuga, delectus hic sed consequatur tempora corporis voluptatibus ipsa eum similiqueLorem, ipsum dolor sit amet consectetur adipisi"
                ></TripData>
            </div>
        </div>
    );
};

export default Trip;