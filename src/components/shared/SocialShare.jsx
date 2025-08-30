import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShare, FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp, FaCopy, FaTimes } from 'react-icons/fa';
import './SocialShare.css';

const SocialShare = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    const currentUrl = window.location.href;
    const title = "Check out Hitesh Shingala's amazing portfolio! 🚀";
    const description = "Award-winning Full Stack Developer crafting digital experiences that captivate and convert.";

    const shareLinks = [
        {
            name: 'Twitter',
            icon: FaTwitter,
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title + ' ' + description)}`,
            color: '#1DA1F2'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
            color: '#0077B5'
        },
        {
            name: 'Facebook',
            icon: FaFacebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
            color: '#1877F2'
        },
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            url: `https://wa.me/?text=${encodeURIComponent(title + ' ' + currentUrl)}`,
            color: '#25D366'
        }
    ];

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const shareVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
            }
        })
    };

    return (
        <>
            <motion.button
                className="share-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 180 : 0 }}
            >
                <FaShare />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="share-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        
                        <motion.div
                            className="share-modal"
                            variants={shareVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="share-header">
                                <h3>✨ Share This Amazing Portfolio</h3>
                                <button 
                                    className="share-close"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="share-content">
                                <p>Help spread the word about this incredible portfolio!</p>
                                
                                <div className="share-buttons">
                                    {shareLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="share-btn"
                                            style={{ '--color': link.color }}
                                            variants={itemVariants}
                                            custom={index}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <link.icon />
                                            <span>{link.name}</span>
                                        </motion.a>
                                    ))}
                                    
                                    <motion.button
                                        className="share-btn copy-btn"
                                        onClick={handleCopyLink}
                                        variants={itemVariants}
                                        custom={shareLinks.length}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaCopy />
                                        <span>{copySuccess ? '✅ Copied!' : 'Copy Link'}</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default SocialShare;