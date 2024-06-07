import React from 'react';
import './footer.css'
function Footer() {
    const footerItem = [
        {
            email: 'asifraza7050@gmail.com',
            content: 'At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti',
            title: "Let's Work Together!",
            address: 'Ansari Mohalla, Chas, Bokaro Steel City, Jharkhand',
            phoneNo: '+91 70509 13927, +91 96085 59158',
            linkedIn: 'https://www.linkedin.com/in/asif-iqbal-ba8baa184/'
        }
    ]
  return (
      <footer>
        { 
            footerItem.map ((data) =>  (
                <div className='container'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='get-in-item'>
                            <span className='title-outline'><i class="fa-regular fa-user"></i>Get in Touch</span>
                            <div className='content-item'>
                                <h2>{data.title}</h2>
                                <p>{data.content}</p>
                            </div>
                            <address>
                                <div className='add-item'>
                                    <span><i class="fa-solid fa-location-dot"></i></span>
                                    <p>{data.address}</p>
                                </div>
                                <div className='add-item'>
                                    <span><i class="fa-solid fa-phone"></i></span>
                                    <p>{data.phoneNo}</p>
                                </div>
                                <div className='add-item'>
                                    <span><i class="fa-regular fa-envelope"></i></span>
                                    <a href="mailto:asifraza7050@gmail.com">{data.email}</a>
                                </div>
                            </address>
                            <div className='social-media'>
                                <a href={data.linkedIn}><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
                                <a href='#'><i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className='form-item'>
                            <form>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='form-group'>
                                        <label>Name</label>
                                        <input type='text' placeholder='Your Name'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>E-mail</label>
                                        <input type='email' placeholder='Your Email'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Phone Number</label>
                                        <input type='text' placeholder='Your Number'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Subject</label>
                                        <input type='text' placeholder='Subject'/>
                                    </div>
                                </div>
                                <div className='form-group pt-4'>
                                    <label>Message</label>
                                    <textarea cols={50} rows={10} placeholder='Message'/>
                                </div>
                                <button type='submit' className='btn primary-btn mt-4'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            ))
        }
    </footer>
  )
}

export default Footer;