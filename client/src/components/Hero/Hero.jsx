import React from 'react';
import MountainPng from '../../assets/moon-surface-hd.png';


const Hero = () => {
  return (
    <div className='bg-black/20 h-full'>
      <div className='h-full flex justify-center items-center  p-4'>
        <div className='container grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='text-white space-y-4 lg:pr-36'>
            <h1
              data-aos="fade-up" className='text-5xl font-bold'
            >

              MIND'SCOOL 
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Mind'Scool  is a non-profit movement empowering the awareness for mental health among the people . It is created to inform the person about his/her mental condition and you can also get a consultancy from a doctor. This is not a site for personal disclosure of suicidal thoughts or behaviours. If you are in crisis, please call 112/911 or go to your nearest emergency department for assistance.
            </p>

            <button data-aos="fade-up" data-aos-delay="500" className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200'>
              LEARN MORE
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img src={MountainPng} alt="" className='absolute right-0 bottom-0 w-full brightness-50 z-10' />
      <div className='absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px] '>

      </div>
    </div>
  )
}

export default Hero