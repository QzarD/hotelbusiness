import React from 'react';
import './Rooms.css';
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import {Link} from "react-router-dom";
import RoomContainer from "../../RoomContainer/RoomContainer";

function Rooms() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </>
    );
}

export default Rooms;