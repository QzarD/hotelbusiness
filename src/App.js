import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Error from "./Pages/Error";
import SingleRoom from "./Pages/SingleRoom";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";

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
