import React from 'react';
import './Error.css';
import Hero from "../../Hero/Hero";
import {Link} from "react-router-dom";
import Banner from "../../Banner/Banner";

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