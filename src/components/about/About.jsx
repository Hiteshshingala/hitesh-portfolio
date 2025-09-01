import React from 'react';
import './About.css';
import Image from '../../assets/HiteshShingala.png';
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
                <img src={Image} alt="Hitesh Shingala - Professional JavaScript Full Stack Developer" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Hitesh Shingala, a professional JavaScript Full Stack Developer with extensive expertise in modern web development technologies. As a skilled software engineer, I specialize in building scalable web applications using React.js, Node.js, TypeScript, and cutting-edge JavaScript frameworks. <br /> <br />
                            With years of experience as a full stack developer, I deliver high-performance web solutions that combine robust backend architecture with intuitive frontend user experiences. My expertise spans across React.js development, Node.js backend systems, TypeScript programming, and modern JavaScript ES6+ features. <br /> <br />
                            As a freelance web developer, I create responsive websites, progressive web applications, and enterprise-level software solutions. My technical proficiency includes React.js for frontend development, Node.js and NestJS for backend services, MongoDB and Redis for database management, and GraphQL for efficient API development.<br /> <br />
                            I'm passionate about clean code architecture, performance optimization, and implementing the latest web development best practices. My approach combines technical excellence with strong problem-solving skills, ensuring every project meets modern web standards and delivers exceptional user experiences. <br /> <br />
                            Whether you need a React.js developer, Node.js specialist, or a complete full stack JavaScript solution, I bring the technical expertise and professional dedication to transform your ideas into powerful web applications. Let's collaborate to build your next successful digital product!<br /> <br />
                            Core technologies and frameworks I specialize in:
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