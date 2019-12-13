import React from 'react';
import './Home.css';
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import {Link} from "react-router-dom";
import Services from "../../Services/Services";
import {FaBeer, FaCocktail, FaHiking, FaShuttleVan} from "react-icons/fa";
import FeaturedRooms from "../../FeaturedRooms/FeaturedRooms";

function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms"
                        subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services state={[
                {icon: <FaCocktail/>,
                title: 'free cocktails',
                info: 'Loren ipsum dolor sit amet consectetur adipicing elit. Mogni, corporis!'},
                {icon: <FaHiking/>,
                title: 'Endless Hiking',
                info: 'Loren ipsum dolor sit amet consectetur adipicing elit. Mogni, corporis!'},
                {icon: <FaShuttleVan/>,
                title: 'Free shuttle',
                info: 'Loren ipsum dolor sit amet consectetur adipicing elit. Mogni, corporis!'},
                {icon: <FaBeer/>,
                title: 'Strongest Beer',
                info: 'Loren ipsum dolor sit amet consectetur adipicing elit. Mogni, corporis!'}
            ]}/>
            <FeaturedRooms/>
        </>
    );
}

export default Home;