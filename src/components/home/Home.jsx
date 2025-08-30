import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import Me from '../../assets/HiteshShingala.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = [
        "🚀 Software Engineer",
        "⚡ Full Stack Developer", 
        "🎨 Digital Craftsman",
        "💡 Innovation Architect",
        "🔥 Problem Solver"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

   const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.02,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(255, 107, 53, 0.4)",
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.95 }
    };

    

    return (
        <motion.section 
            className="home container" 
            id='home'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="intro">
                <motion.img 
                    src={Me} 
                    alt="Hitesh Shingala - Full Stack Developer" 
                    className='home__img magnetic-element' 
                    width='120'
                    variants={imageVariants}
                    whileHover="hover"
                    loading="eager"
                />
                
                <motion.h1 
                    className="home__name"
                    variants={itemVariants}
                >
                    Hitesh Shingala
                </motion.h1>
                
                <motion.div
                    className="home__education"
                    variants={itemVariants}
                    style={{ minHeight: '30px', display: 'flex', alignItems: 'center' }}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            I'm a {roles[currentRole]}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <HeaderSocials />
                </motion.div>

                <motion.a 
                    href="#contact" 
                    className="btn magnetic-element" 
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    🎯 Let's Create Magic Together
                </motion.a>

                <motion.div variants={itemVariants}>
                    <ScrollDown />
                </motion.div>
            </div>

            <Shapes />
        </motion.section>
    )
}

export default Home