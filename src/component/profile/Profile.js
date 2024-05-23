import React from 'react';
import './profile.css'

function Profile() {
  return (
    <section className='profile-section'>
        <div className='container'>
            <div className='grid grid-cols-2 items-center'>
                <div className='profile-content  leading-snug'>
                    <span>This is me</span>
                    <div className='text-5xl py-3'>
                        <h2>Md. Asif Iqbal</h2>
                        <h2>Web Designer</h2>
                    </div>
                    <div className='btn-item'>
                        <a href='#' className='btn primary-btn me-6'>Hire me<i class="fa-solid fa-chevron-right"></i></a>
                        <a href='#' className='outline-btn'>Download Resume<i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
                <div className='profile-img'>
                    <img src='https://dummyimage.com/600x500' alt='Asif'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile;