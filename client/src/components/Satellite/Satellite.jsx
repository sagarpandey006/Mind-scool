import React from 'react';
import satelitImg from '../../assets/satelite2.jpg';


const Satelite = () => {
  return (
    <>
      <section className='bg-blue-500 text-white py-20'>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-1-2 border-b-2 border-1-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className='text-sky-800 uppercase'
              >
                Our Mission
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className='uppercase text-5xl'
              >
                MISSION
              </h1>

              <p
                data-aos="fade-up" data-aos-delay="700"
              >
                The mission of this project is to develop an engaging mental wellness platform that supports daily well-being through interactive exercises and personalized insights. By combining gamified elements with mindfulness practices, we aim to empower users to build consistent wellness habits, access supportive community connections, and make mental health resources accessible and enjoyable.
              </p>


              <button
                data-aos="fade-up"
                data-aos-daily='900'
                className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1
                          rounded-md duration-200'
              >
                view All
              </button>


            </div>

            <div
              data-aos="zoom-in"
            >
              <img src={satelitImg} alt=""
                className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Satelite; 