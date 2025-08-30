import './App.css';
import { Suspense, lazy } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import SocialShare from './components/shared/SocialShare';
import FloatingParticles from './components/shared/FloatingParticles';
import useLocalStorage from 'use-local-storage';
import { useEffect, useState } from 'react';
import { optimizeWebVitals } from './utils/performanceOptimizations';

// Lazy load components for better performance
const About = lazy(() => import('./components/about/About'));
const Services = lazy(() => import('./components/services/Services'));
const Resume = lazy(() => import('./components/resume/Resume'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
const Blog = lazy(() => import('./components/blog/Blog'));
const Contact = lazy(() => import('./components/contact/Contact'));


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [isLoading, setIsLoading] = useState(true);

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        // Simulate loading for better UX
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
    const metaTags = [
        { name: 'description', content: '🚀 Hitesh Shingala - Award-winning Full Stack Developer crafting digital experiences that captivate and convert. 6+ years transforming bold ideas into innovative solutions.' },
        { name: 'keywords', content: 'Hitesh Shingala, Full Stack Developer, Portfolio, JavaScript, React, Node.js, Frontend Developer, Backend Developer, Web Development, Software Engineer, TypeScript, MongoDB, Express.js, HTML, CSS, API Development, React Native, Mobile Development, Database Design, UI/UX, Git, DevOps, AWS, Cloud Computing, Progressive Web Apps, RESTful Services, GraphQL, Software Architecture, Innovation, Digital Solutions, Tech Leadership' },
        { name: 'author', content: 'Hitesh Shingala' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'bingbot', content: 'index, follow' },
        { name: 'theme-color', content: '#ff6b35' },
        { name: 'msapplication-TileColor', content: '#ff6b35' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'profile' },
        { property: 'og:title', content: '🚀 Hitesh Shingala - Innovative Full Stack Developer | Digital Craftsman' },
        { property: 'og:description', content: 'Step into the world of exceptional digital craftsmanship. Award-winning developer with 6+ years of experience creating stunning, high-performance web applications that users love and Google ranks.' },
        { property: 'og:url', content: 'https://hiteshshingala.github.io/portfolio' },
        { property: 'og:site_name', content: 'Hitesh Shingala Portfolio' },
        { property: 'og:image', content: 'https://hiteshshingala.github.io/portfolio/static/media/avatar-2.1f6228396273619645be.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Hitesh Shingala - Full Stack Developer Portfolio Preview' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@HiteshShingala' },
        { name: 'twitter:creator', content: '@HiteshShingala' },
        { name: 'twitter:title', content: '🚀 Hitesh Shingala - Digital Innovation Architect' },
        { name: 'twitter:description', content: 'Transforming bold visions into digital reality. 6+ years of crafting award-winning web experiences that captivate users and drive results. #FullStackDeveloper #Innovation' },
        { name: 'twitter:image', content: 'https://pbs.twimg.com/profile_banners/1195694227927126016/1601190053/1500x500' },
        { name: 'linkedin:owner', content: 'https://linkedin.com/in/hitesh-shingala' }
    ];

    // Enhanced meta tag injection with duplicate prevention
    metaTags.forEach(tag => {
        // Remove existing similar meta tags to prevent duplicates
        const existingMetas = document.querySelectorAll('meta[name="' + tag.name + '"], meta[property="' + tag.property + '"]');
        existingMetas.forEach(meta => meta.remove());
        
        const meta = document.createElement('meta');
        Object.keys(tag).forEach(key => {
            meta.setAttribute(key, tag[key]);
        });
        document.head.appendChild(meta);
    });

    // Add JSON-LD structured data for better SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Hitesh Shingala",
        "jobTitle": "Full Stack Developer",
        "description": "Award-winning Full Stack Developer with 6+ years of experience creating innovative web applications",
        "url": "https://hiteshshingala.github.io/portfolio",
        "image": "https://hiteshshingala.github.io/portfolio/static/media/avatar-2.1f6228396273619645be.png",
        "sameAs": [
            "https://linkedin.com/in/hitesh-shingala",
            "https://github.com/hiteshshingala",
            "https://twitter.com/HiteshShingala"
        ],
        "knowsAbout": [
            "JavaScript", "React", "Node.js", "TypeScript", "MongoDB", "Express.js",
            "Full Stack Development", "Web Development", "Software Engineering",
            "Frontend Development", "Backend Development", "API Development"
        ],
        "alumniOf": {
            "@type": "Organization",
            "name": "Software Engineering"
        }
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    useEffect(() => {
        const canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.href = window.location.href;
        document.head.appendChild(canonicalLink);
    }, []);
    if (isLoading) {
        return (
            <div className="page-loader" data-theme={theme}>
                <div className="loader-spinner"></div>
            </div>
        );
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <Suspense fallback={
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                        <div className="loader-spinner"></div>
                    </div>
                }>
                    <About />
                    <Services />
                    <Resume />
                    <Portfolio />
                    <Blog />
                    <Contact theme={theme} />
                </Suspense>
            </main>
            
            {/* Social Share Component */}
            <SocialShare />
        </div>
    );
}

export default App;
