import React from 'react';
import {RoomContext} from "../context";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";

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