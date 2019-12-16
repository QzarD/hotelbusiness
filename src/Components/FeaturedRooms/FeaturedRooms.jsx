import React from 'react';
import './FeaturedRooms.css';
import {RoomContext} from "../../context";
import Title from "../Title/Title";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";

function FeaturedRooms() {
    return (
        <RoomContext.Consumer>
            {context=>{
                const {loading, featuredRooms}=context;
                return (
                <section className={'featured-rooms'}>
                    <Title title={'featured rooms'}/>
                    <div className="featured-rooms-center">
                        {loading
                            ? <Loading/>
                            : featuredRooms.map(room=>{
                            return <Room key={room.id} room={room}/>
                        })}
                    </div>
                </section>
                )
            }}
        </RoomContext.Consumer>
    );
}

export default FeaturedRooms;