import React from 'react'
// import sateliteImg from '../../assets/foreigners.jpg'; 
import Talk from '../../assets/talk.avif';


const Rapidscat = () => {
  return (
    <>
      <section className='bg-blue-500  text-white pb-12'>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img src={Talk}

                alt=""
                className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'
              />
            </div>

            <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
              <p data-aos="fade-up"
                data-aos-delay="300"
                className='text-sky-800 uppercase'
              >
                Talk to Therapist
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className='uppercase text-5xl'

              >
                to release  stress


              </h1>

              <p data-aos="fade-up " data-aos-delay="700">
                Engaging with a therapist provides a compassionate, judgment-free space where individuals can openly discuss their emotions, challenges, and personal experiences. Therapy promotes self-discovery, emotional resilience, and practical coping strategies, helping people navigate stress, anxiety, and other mental health concerns. Through therapeutic support, individuals gain clarity, improve relationships, and work towards healthier, more fulfilling lives.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200'
              >
                View All

              </button>

            </div>
          </div>
        </div>
      </section>






    </>
  )
}

export default Rapidscat;