import React from 'react';
import './about.css'

function About() {
  return (
    <section className='about-section'>
        <div className='container'>
            <div className='grid grid-cols-2 gap-6'>
                <div className='about-item'>
                    <span className='title-outline'><i class="fa-regular fa-user"></i>About me</span>
                    <div className='content-item'>
                        <h2>Every great design begin<br/>withan even better story</h2>
                        <p>At vero eos et accusamus etodio dignissimos ducimus praesentium
                        voluptatum corrupti quos dolores quas molestias excepturi sint
                        occaecati cupiditate provident qui officia deserunt mollitia animi,
                        id est laborum et dolorum</p>
                    </div>
                    <div className='ed-item grid grid-cols-2'>
                        <div className='content-wrap min-w-16'>
                            <span><i class="fa-solid fa-check"></i></span>
                            <div className='ed-content text-lg'>
                                <span className='block'>Graduate, B.A.<br/>BBMKU</span>
                                <span className='opacity-40'>2018-2021</span>
                            </div>
                        </div>
                        <div className='content-wrap'>
                            <span><i class="fa-solid fa-check"></i></span>
                            <div className='ed-content text-lg pe-5'>
                                <span className='block'>Diploma in Graphic, Web Design, Aren Animation, Kolkata</span>
                                <span className='opacity-40'>2019-2020</span>
                            </div>
                        </div>
                    </div>
                    <div className='contact-box'>
                        <div className='contact-item'>
                            <span><i class="bi bi-envelope"></i></span>
                            <div className='email'>
                                <span className='opacity-40'> Email Us</span>
                                <a href='mailto:asifraza7050@gmail.com'>asifraza7050@gmail.com</a>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <span><i class="bi bi-telephone"></i></span>
                            <div className='email'>
                                <span className='opacity-40'> Make A Call</span>
                                <a href='tel:+917050913927'>+91 70509 13927</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='img-item'>
                    <img src='https://dummyimage.com/600x550'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;