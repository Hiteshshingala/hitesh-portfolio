import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "React.js Frontend Development",
        description:
            "Expert React.js frontend development services creating responsive, interactive user interfaces with modern JavaScript, TypeScript, and cutting-edge web technologies for optimal user experiences.",
    },
    {
        id: 2,
        image: Image2,
        title: "Node.js Backend Development",
        description:
            "Scalable Node.js backend development solutions building robust APIs, microservices, and server-side applications with Express.js, NestJS, MongoDB, and real-time functionality.",
    },
    {
        id: 3,
        image: Image3,
        title: "Full Stack JavaScript Development",
        description:
            "Complete full stack JavaScript development services combining React.js frontend expertise with Node.js backend proficiency for end-to-end web application solutions and software engineering.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt={`${title} - Professional Web Development Service`} className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services