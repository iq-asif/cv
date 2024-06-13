import React from 'react';
import pdf from '../profile/assets/Asif-Iqbal-Resume.pdf';
import './profile.css'

function Profile() 
{
    // const onButtonClick = () => {
    //    const pdfUrl = "../profile/assets/Asif-Iqbal-Resume.pdf";
    //    const link = document.createElement('a');
    //    link.href =  pdfUrl;
    //    link.download = 'Asif-Iqbal-Resume.pdf';
    //    document.body.appendChild(link);
    //    link.click();
    //    document.body.removeChild(link);
   
    // };
  return (
    <section className='profile-section'>
        <div className='container'>
            <div className='grid grid-cols-2 items-center'>
                <div className='profile-content leading-snug'>
                    <span className='md:text-sm'>This is me</span>
                    <div className='text-5xl py-3 max-[600px]:text-lg'>
                        <h2>Md. Asif Iqbal</h2>
                        <h2>Web Designer</h2>
                    </div>
                    <div className='btn-item'>
                        <a href='#' className='btn primary-btn me-6 max-[600px]:inline-block max-[600px]:mb-2'>Hire me<i class="fa-solid fa-chevron-right"></i></a>
                        <a href={pdf} download='Asif-Iqbal-Resume.pdf' className='outline-btn '>Download Resume<i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
                <div className='profile-img'>
                    <img src='https://dummyimage.com/600x500' alt='Asif' className='w-full '/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile;