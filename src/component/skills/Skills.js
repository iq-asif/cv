import React from 'react';
import "./skill.css";


function Skills() {
    const skillsItem = [

        {
            icon: require('./img/html.png'),
            skillTitle: 'HTML5',
            skillPercent: '80%',
        },
        {
            icon: require('./img/css.png'),
            skillTitle: 'CSS3',
            skillPercent: '80%',
        },
        {
            icon: require('./img/bootstrap.png'),
            skillTitle: 'Bootstrap',
            skillPercent: '80%',
        },
        {
            icon: require('./img/wordpress.png'),
            skillTitle: 'WordPress',
            skillPercent: '80%',
        },
        {
            icon: require('./img/javascript.png'),
            skillTitle: 'JavaScript',
            skillPercent: '25%',
        },
        {
            icon: require('./img/figma.png'),
            skillTitle: 'Figma',
            skillPercent: '80%',
        },
        {
            icon: require('./img/illustrator.png'),
            skillTitle: 'Illustrator',
            skillPercent: '80%',
        },
        {
            icon: require('./img/photoshop.png'),
            skillTitle: 'Photoshop',
            skillPercent: '80%',
        },
    ];
  return (
    <section className='skills-section'>
        <div className='container py-5'>
            <div className='grid grid-cols-2 items-center gap-6'>
                <div className='skills-content-item'>
                    <span className='title-outline'><i class="bi bi-vector-pen"></i>My Skills</span>
                    <h2 className='text-5xl py-5'>Let’s Explore Popular Skills & Experience</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo inventore veritatis</p>
                </div>
                <div className='grid grid-cols-4 gap-4 text-center'>
                    {
                        skillsItem.map((data) => (
                            <div className='skills-box'>
                                <img src={data.icon}></img>
                                <span className='block font-semibold py-2'>{data.skillTitle}</span>
                                <span>{data.skillPercent}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills