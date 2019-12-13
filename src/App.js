import React from 'react';
import './App.css';
import Home from "./Components/Pages/Home/Home";
import Rooms from "./Components/Pages/Rooms/Rooms";
import Error from "./Components/Pages/Error/Error";
import SingleRoom from "./Components/Pages/SingleRoom/SingleRoom";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms/" component={Rooms}/>
                <Route exact path="/rooms/:slug" component={SingleRoom}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;
