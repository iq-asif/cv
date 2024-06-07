import React from 'react';
import "./portfolio.css";
function Portfolio() {
    const portfolioImg = [
        {
            img: require('./img/bmits.jpg'),
            linkUrl: 'https://bestonemits.com/',
            companyName: 'Bestone Meest IT Services',
        },
        {
            img: require('./img/bestone-water.jpg'),
            linkUrl: 'https://bestonewater.com/',
            companyName: 'Bestone Water',
        },
        {
            img: require('./img/malana-marino.jpg'),
            linkUrl: 'https://www.malanamerino.com/',
            companyName: 'Malana Merino (E-commerce)',
        },
        {
            img: require('./img/tejas-opt.jpg'),
            linkUrl: 'https://tejasoptical.com/',
            companyName: 'Tejas Optical (Informative)',
        },
    ]
  return (
    <section className='portfolio-section'>
        <div className='container'>
            <div>
                <span className='title-outline'><i class="bi bi-laptop"></i>Portfolio</span>
                <h2 className='text-5xl py-5'>Featured Projects</h2>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    portfolioImg.map((data) => (
                        <div className="portfolio-item">
                            <a href={data.linkUrl} target="_blank">
                                <div className="content-overlay"></div>
                                <img className="img-item" src={data.img} alt=""/>
                                <div className="portfolio-title fadeIn-left">
                                    <h3>{data.companyName}</h3>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    
  )
}

export default Portfolio;