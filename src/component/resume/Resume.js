import React from 'react'
import './resume.css'

// function Resume() {
//   return (
//     <section className='resume-section'>
//         <div className='container'>
//             <div className='grid grid-cols-2'>
//                 <div>
//                     <span className='title-outline'><i class="bi bi-briefcase"></i>My Resume</span>
//                     <h2 className='text-5xl py-5'>Real Problem Solutions Experience</h2>
//                 </div>
//                 <div className='star'>
//                     <span><i class="bi bi-asterisk"></i></span>
//                 </div>
//             </div>
//             <div className='grid grid-cols-3'>
//                 <div className='exp-box'>
//                     <span><i class="bi bi-arrow-up-right"></i></span>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// const Resume = () => {
//     const items = ['item 1', 'item 2', 'item 3'];
//     const itemElements = [];
  
//     for (let i = 0; i < items.length; i++) {
//       itemElements.push(<p key={i}>{items[i]}</p>);
//     }
  
//     return <div>{itemElements}</div>;
// };

const Resume = () => {
    const workInfoData = [
      {
        date: "Feb 2023 - Aug 2023",
        title: "Web Designer Executive",
        companyName: "Reliqus Consulting, Delhi",
      },
      {
        date: "Feb 2023 - Aug 2023",
        title: "Web Designer",
        companyName: "Webmaddy, Kolkata",
      },
      {
        date: "Feb 2023 - Aug 2023",
        title: "WordPress Web Designer",
        companyName: "Kus Software, Kolkata",
      },
      {
        date: "Oct 2023 - working",
        title: "Web Designer",
        companyName: "Bestone Meest IT Services, Delhi",
      },
    ];
  
    return (
      <section className='resume-section'>
        <div className='container'>
          <div className='grid grid-cols-2'>
              <div>
                  <span className='title-outline'><i class="bi bi-briefcase"></i>My Resume</span>
                  <h2 className='text-5xl py-5 max-[600px]:text-2xl'>Real Problem Solutions Experience</h2>
              </div>
              <div className='star'>
                  <span><i class="bi bi-asterisk"></i></span>
              </div>
          </div>
        </div>
        <div className='container work-exp'>
          <div className='grid grid-cols-4 gap-3 max-[600px]:grid-cols-1'>
            {
              workInfoData.map((data) => (
                <div className='work-section-info'>
                    <span className='arrow'><i class="bi bi-arrow-up-right"></i></span>
                  <div className='work-content'>
                    <p className='opacity-40'>{data.date}</p>
                    <h3>{data.title}</h3>
                    <p className='opacity-40'>{data.companyName}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  };


export default Resume;