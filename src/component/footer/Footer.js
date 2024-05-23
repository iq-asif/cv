import React from 'react';
import './footer.css'
function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='grid grid-cols-2 gap-6'>
                <div className='get-in-item'>
                    <span className='title-outline'><i class="fa-regular fa-user"></i>Get in Touch</span>
                    <div className='content-item'>
                        <h2>Let's Work Together!</h2>
                        <p>At vero eos et accusamus etodio dignissimos ducimus praesentium
                        voluptatum corrupti</p>
                    </div>
                    <address>
                        <div className='add-item'>
                            <span><i class="fa-solid fa-location-dot"></i></span>
                            <p>Ansari Mohalla, Chas, Bokaro Steel City, Jharkhand</p>
                        </div>
                        <div className='add-item'>
                            <span><i class="fa-solid fa-phone"></i></span>
                            <p>+91 70509 13927, +91 96085 59158</p>
                        </div>
                        <div className='add-item'>
                            <span><i class="fa-regular fa-envelope"></i></span>
                            <p>asifraza7050@gmail.com</p>
                        </div>
                    </address>
                    <div className='social-media'>
                        <a href='#'><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
                        <a href='#'><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div className='form-item'>
                    <form>
                        <div className='grid grid-cols-2'>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type='text'/>
                            </div>
                            <div className='form-group'>
                                <label>E-mail</label>
                                <input type='email'/>
                            </div>
                            <div className='form-group'>
                                <label>Phone Number</label>
                                <input type='text'/>
                            </div>
                            <div className='form-group'>
                                <label>Subject</label>
                                <input type='text'/>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Message</label>
                            <textarea cols={50} rows={10}></textarea>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;