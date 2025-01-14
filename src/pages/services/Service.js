import React from 'react'
import "./service.css"

function Service() {
    const specialization = [
        {
            no: "01",
            title: "Web Design",
            description: "At vero eos et accusamus etodi dignissimos ducimus praesentium voluptatum corrupti quos dolores",

        },
        {
            no: "02",
            title: "Graphic Design",
            description: "At vero eos et accusamus etodi dignissimos ducimus praesentium voluptatum corrupti quos dolores",

        },
        {
            no: "03",
            title: "UI/UX Design",
            description: "At vero eos et accusamus etodi dignissimos ducimus praesentium voluptatum corrupti quos dolores",

        },
    ];

  return (
    <section className='spec-section'>
        <div className='container px-5'>
            <div>
                <span className='title-outline'><i class="bi bi-laptop"></i>Services</span>
                <h2 className='text-5xl py-5 max-[600px]:text-2xl'>My Specialization</h2>
            </div>
            <div className='grid grid-cols-3 gap-4 max-[600px]:grid-cols-1'>
                {
                    specialization.map((data) => (
                        <div className='spec-box'>
                            <span>
                                {data.no}
                                <hr/>
                            </span>
                            <div className='content'>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Service