import React from 'react';
import './Home.css';
import Me from '../../assets/HiteshShingala.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="Hitesh Shingala - Full Stack JavaScript Developer and Software Engineer" className='home__img' width='120' />
                <h1 className="home__name">Hitesh Shingala</h1>
                <span className="home__education">Full Stack JavaScript Developer & React.js Expert</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home