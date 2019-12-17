import React from 'react';
import Title from "./Title";

function Services({state}) {
    return (
        <section className={'services'}>
            <Title title={'services'}/>
            <div className="services-center">
                {state.map((item, index)=>{
                    return <article key={index} className={'service'}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    );
}

export default Services;