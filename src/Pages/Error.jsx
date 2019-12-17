import React from 'react';
import Hero from "../Components/Hero";
import {Link} from "react-router-dom";
import Banner from "../Components/Banner";

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="page bot found">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    );
}

export default Error;