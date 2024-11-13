import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage';
import { useEffect } from 'react';


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
    const metaTags = [
        { name: 'description', content: 'Hitesh Shingala - Full Stack Developer Portfolio' },
        { name: 'keywords', content: 'Hitesh Shingala, Full Stack Developer, Portfolio, JavaScript, React, Node.js' },
        { name: 'author', content: 'Hitesh Shingala' },
        { property: 'og:title', content: 'Hitesh Shingala - Full Stack Developer' },
        { property: 'og:description', content: 'Welcome to the portfolio of Hitesh Shingala, a Full Stack Developer specializing in JavaScript, React, and Node.js.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://hiteshshingala.github.io/portfolio' },
        { property: 'og:image', content: 'https://hiteshshingala.github.io/portfolio/static/media/avatar-2.1f6228396273619645be.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Hitesh Shingala - Full Stack Developer' },
        { name: 'twitter:description', content: 'Passionate software developer with 6 years of hands-on experience crafting elegant and efficient code. Transforming ideas into innovative solutions' },
        { name: 'twitter:image', content: 'https://pbs.twimg.com/profile_banners/1195694227927126016/1601190053/1500x500' }
    ];

    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        Object.keys(tag).forEach(key => {
            meta.setAttribute(key, tag[key]);
        });
        document.head.appendChild(meta);
    });

    useEffect(() => {
        const canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.href = window.location.href;
        document.head.appendChild(canonicalLink);
    }, []);
    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Services />
                <Resume />
                <Portfolio />
                {/* <Testimonials /> */}
                <Blog />
                <Contact theme={theme} />
            </main>
        </div>
    );
}

export default App;
