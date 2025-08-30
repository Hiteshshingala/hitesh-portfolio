import { useEffect, useRef } from 'react';

export const useMagneticEffect = () => {
    const magneticRef = useRef(null);

    useEffect(() => {
        const element = magneticRef.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = 100;
            
            if (distance < maxDistance) {
                const strength = 1 - distance / maxDistance;
                const translateX = x * strength * 0.3;
                const translateY = y * strength * 0.3;
                
                element.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
            }
        };

        const handleMouseLeave = () => {
            element.style.transform = 'translate(0px, 0px) scale(1)';
        };

        const handleMouseEnter = () => {
            element.style.transition = 'none';
        };

        const handleTransitionEnd = () => {
            element.style.transition = 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)';
        };

        document.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, []);

    return magneticRef;
};

export const useScrollAnimation = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return scrollRef;
};