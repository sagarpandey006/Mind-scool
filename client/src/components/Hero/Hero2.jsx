// import React from 'react';
// import MountainPng from '../../assets/moon-surface-hd.png';


// const Hero = () => {
//   return (
//     <div className='bg-black/20 h-full'>
//       <div className='h-full flex justify-center items-center  p-4'>
//         <div className='container grid grid-cols-1 sm:grid-cols-2 gap-4'>
//           <div className='text-white space-y-4 lg:pr-36'>
//             <h1
//               data-aos="fade-up" className='text-5xl font-bold'
//             >

              
//             </h1>
//             <p data-aos="fade-up" data-aos-delay="300">
//               The Bail Reckoner is an advanced web application designed to streamline the bail process for undertrial prisoners, legal aid providers, and judicial authorities. Utilizing the MERN stack, it integrates seamlessly with UIDAI's API for Aadhar-based user authentication and leverages AI to calculate appropriate bail periods based on various legal and procedural parameters. The application features a user-friendly interface for managing criminal details and provides comprehensive insights into the laws violated and consequences. It also includes a robust backend for secure data handling and a dynamic frontend for efficient user interaction.
//             </p>

//             <button data-aos="fade-up" data-aos-delay="500" className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200'>
//               LEARN MORE
//             </button>
//           </div>
//           <div></div>
//         </div>
//       </div>
//       <img src={MountainPng} alt="" className='absolute right-0 bottom-0 w-full brightness-50 z-10' />
//       <div className='absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px] '>

//       </div>
//     </div>
//   )
// }

// export default Hero



import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center py-8'>
      <div className='container max-w-4xl'>
        <h1 className='text-4xl font-bold text-center mb-8 mt-8'>Contact Us</h1>
        
        <div className='flex flex-col md:flex-row justify-between'>
          {/* Contact Form */}
          <form className='bg-white p-6 rounded-lg shadow-md w-full md:w-1/2'>
            <h2 className='text-2xl font-semibold mb-4'>Send Us a Message</h2>
            <label className='block mb-2'>
              <span className='text-gray-700'>Name</span>
              <input type='text' name='name' required className='block w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </label>
            <label className='block mb-2'>
              <span className='text-gray-700'>Email</span>
              <input type='email' name='email' required className='block w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </label>
            <label className='block mb-2'>
              <span className='text-gray-700'>Subject</span>
              <input type='text' name='subject' required className='block w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </label>
            <label className='block mb-4'>
              <span className='text-gray-700'>Message</span>
              <textarea name='message' required className='block w-full mt-1 p-2 border border-gray-300 rounded-md' rows='4'></textarea>
            </label>
            <button type='submit' className='bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md'>
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className='md:w-1/2 md:ml-8 mt-8 md:mt-0'>
            <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
            <p className='text-gray-700 mb-2'>Email: <a href="mailto:contact@yourdomain.com" className='text-blue-500 hover:underline'>optimus@gmail.com</a></p>
            <p className='text-gray-700 mb-2'>Phone: (123) 456-7890</p>
            <p className='text-gray-700 mb-2'>Address: 1234 Your Street, City, Country</p>
            <p className='text-gray-700 mb-2'>Business Hours: Mon-Fri, 9 AM - 5 PM</p>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <h2 className='text-2xl font-semibold mb-4'>Follow Us</h2>
          <div className='flex justify-center gap-4'>
            <a href="https://facebook.com/yourpage" className='text-blue-600 hover:text-blue-800'>Facebook</a>
            <a href="https://twitter.com/yourpage" className='text-blue-400 hover:text-blue-600'>Twitter</a>
            <a href="https://linkedin.com/in/yourprofile" className='text-blue-700 hover:text-blue-900'>LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
