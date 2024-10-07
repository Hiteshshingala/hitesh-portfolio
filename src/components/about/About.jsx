import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello there! I'm a JavaScript Full Stack Freelancer with extensive experience in front-end and back-end development. My expertise in modern frameworks and server-side technologies enables me to deliver top-quality solutions that meet the unique needs of each project. <br /> <br />
                            I'm committed to delivering high-quality code on time and within budget, ensuring that each project is completed to the highest standard. My attention to detail is second to none, and I take pride in delivering clean, efficient code that is easy to maintain and scale.<br /> <br />
                            Whether you're looking to build a dynamic and responsive website, a robust web application, or anything in between, I have the skills and experience to bring your ideas to life. My proficiency in HTML, CSS, JavaScript, and popular frameworks like React.js and Node.js enables me to create seamless web experiences that provide a flawless user experience.<br /> <br />
                            I'm a passionate problem-solver and enjoy finding creative solutions to complex challenges. As a team player, I thrive on collaborating with others to achieve a common goal. I'm committed to staying up-to-date with the latest trends and technologies in the industry, ensuring that each project I work on is built with the most cutting-edge tools and techniques. <br /> <br />
                            If you're looking for a dedicated and experienced JavaScript Full Stack Freelancer to bring your web projects to life, look no further. Let's work together to create exceptional web experiences that exceed your expectations!<br /> <br />
                            Here are a few technologies I’ve expertise with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Node.js</li>
                            <li>NestJS</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                            <li>RabbitMQ</li>
                            <li>GraphQL</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About