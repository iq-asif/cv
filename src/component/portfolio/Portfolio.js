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
                        <a href={data.linkUrl} target='_blank' className='img-item'>
                            <img src={data.img} className='max-w-full'/>
                            <div className='portfolio-item'>
                                {data.companyName}
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    </section>
    
  )
}

export default Portfolio;