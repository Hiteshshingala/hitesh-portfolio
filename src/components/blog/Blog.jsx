import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@Hiteshshingala/finding-the-longest-palindrome-in-a-string-using-javascript-70d084dd22a7"><span className="blog__category">Javascript</span></a>
                        <a href="https://medium.com/@Hiteshshingala/finding-the-longest-palindrome-in-a-string-using-javascript-70d084dd22a7"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Finding the Longest Palindrome in a String using JavaScript</h3>
                        <div className="blog__meta">
                            <span>10 May, 2023</span>
                            {/* <span className="blog__dot">.</span> */}
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@Hiteshshingala/unlocking-the-power-of-langchain-with-sql-databases-a-game-changer-for-data-driven-applications-105a3b1d7209"><span className="blog__category">Javascript</span></a>
                        <a href="https://medium.com/@Hiteshshingala/unlocking-the-power-of-langchain-with-sql-databases-a-game-changer-for-data-driven-applications-105a3b1d7209"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Unlocking the Power of LangChain with SQL Databases: A Game-Changer for Data-Driven Applications</h3>
                        <div className="blog__meta">
                            <span>02 Jun, 2024</span>
                            {/* <span className="blog__dot">.</span> */}
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@Hiteshshingala/seamless-authentication-in-next-js-with-omni-integration-using-oidc-client-19c1dca965f8"><span className="blog__category">Javascript</span></a>
                        <a href="https://medium.com/@Hiteshshingala/seamless-authentication-in-next-js-with-omni-integration-using-oidc-client-19c1dca965f8"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Seamless Authentication in Next.js with Identity Server 4 Integration using OIDC-Client</h3>
                        <div className="blog__meta">
                            <span>01 Jan, 2024</span>
                            {/* <span className="blog__dot">.</span> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@Hiteshshingala/the-importance-of-readiness-and-liveness-checks-in-a-backend-application-26a131433aac"><span className="blog__category">Javascript</span></a>
                        <a href="https://medium.com/@Hiteshshingala/the-importance-of-readiness-and-liveness-checks-in-a-backend-application-26a131433aac"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">The Importance of Readiness and Liveness Checks in a Backend Application</h3>
                        <div className="blog__meta">
                            <span>17 Dec, 2023</span>
                            {/* <span className="blog__dot">.</span> */}
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@Hiteshshingala/the-importance-of-readiness-and-liveness-checks-in-a-backend-application-26a131433aac"><span className="blog__category">Javascript</span></a>
                        <a href="https://medium.com/@Hiteshshingala/the-importance-of-readiness-and-liveness-checks-in-a-backend-application-26a131433aac"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">The Importance of Readiness and Liveness Checks in a Backend Application</h3>
                        <div className="blog__meta">
                            <span>17 Dec, 2023</span>
                            {/* <span className="blog__dot">.</span> */}
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@Hiteshshingala/exploring-microfrontend-architecture-with-javascript-and-next-js-caa459a6bd0b"><span className="blog__category">Javascript</span></a>
                        <a href="https://medium.com/@Hiteshshingala/exploring-microfrontend-architecture-with-javascript-and-next-js-caa459a6bd0b"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Exploring microfrontend Architecture with JavaScript and Next.js</h3>
                        <div className="blog__meta">
                            <span>17 Dec, 2023</span>
                            {/* <span className="blog__dot">.</span> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@Hiteshshingala/web-workers-with-javascript-harnessing-the-power-of-parallelism-8c79a3844b10"><span className="blog__category">Javascript</span></a>
                        <a href="https://medium.com/@Hiteshshingala/web-workers-with-javascript-harnessing-the-power-of-parallelism-8c79a3844b10"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Web Workers with JavaScript: Harnessing the Power of Parallelism</h3>
                        <div className="blog__meta">
                            <span>17 Dec, 2023</span>
                            {/* <span className="blog__dot">.</span> */}
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@Hiteshshingala/creating-an-npm-package-for-common-code-in-multiple-applications-with-mui-and-storybook-8a93ec5ae110"><span className="blog__category">Javascript</span></a>
                        <a href="https://medium.com/@Hiteshshingala/creating-an-npm-package-for-common-code-in-multiple-applications-with-mui-and-storybook-8a93ec5ae110"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Creating an NPM Package for Common Code in Multiple Applications with MUI and Storybook</h3>
                        <div className="blog__meta">
                            <span>17 Dec, 2023</span>
                            {/* <span className="blog__dot">.</span> */}
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@Hiteshshingala/exploring-the-world-of-indexeddb-2b3bd40c90f3"><span className="blog__category">Javascript</span></a>
                        <a href="https://medium.com/@Hiteshshingala/exploring-the-world-of-indexeddb-2b3bd40c90f3"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Exploring the World of IndexedDB</h3>
                        <div className="blog__meta">
                            <span>17 Dec, 2023</span>
                            {/* <span className="blog__dot">.</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog