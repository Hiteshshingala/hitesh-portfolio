// Performance optimization utilities

// Intersection Observer for lazy loading and scroll animations
export const createIntersectionObserver = (callback, options = {}) => {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Debounce function for scroll events
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Preload critical images
export const preloadImages = (imagePaths) => {
    imagePaths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = path;
        document.head.appendChild(link);
    });
};

// Optimize images with loading="lazy" and proper alt text
export const optimizeImage = (src, alt, className = '', loading = 'lazy') => {
    return {
        src,
        alt,
        className,
        loading,
        decoding: 'async',
        fetchpriority: loading === 'eager' ? 'high' : 'auto'
    };
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
};

// Analytics and tracking (privacy-focused)
export const trackPageView = (pageName) => {
    // Use privacy-focused analytics
    if (window.gtag && typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
            page_title: pageName,
            page_location: window.location.href
        });
    }
};

// Memory management for animations
export const cleanupAnimations = (elements) => {
    elements.forEach(element => {
        if (element) {
            element.style.transform = '';
            element.style.transition = '';
        }
    });
};

// Viewport detection
export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Browser feature detection
export const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'tablet';
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return 'mobile';
    }
    return 'desktop';
};

// Memory usage monitoring
export const monitorPerformance = () => {
    if ('performance' in window && 'memory' in performance) {
        const memory = performance.memory;
        console.log('Memory Usage:', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + 'MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + 'MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + 'MB'
        });
    }
};

// Optimize for Core Web Vitals
export const optimizeWebVitals = () => {
    // Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime);
            }
        }
    });
    
    try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
        // Fallback for unsupported browsers
    }
};