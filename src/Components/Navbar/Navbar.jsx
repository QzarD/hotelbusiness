import React, {useState} from 'react';
import './Navbar.css';
import logo from "../../images/logo.svg"
import {Link} from "react-router-dom";
import {FaAlignRight} from "react-icons/fa";

function Navbar() {
    const [navOpen,setNavOpen]=useState(false);
    const handleToggle=()=>{
        setNavOpen(!navOpen)
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="hotelbusiness"/>
                        </Link>
                        <button type="button" className="nav-btn"
                        onClick={()=>{handleToggle()}}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={navOpen? "nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;