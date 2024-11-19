


import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import reward from '../RewardTree/RewardTree';

const Navbar = () => {
  return (
    <nav data-aos="fade-down" className='fixed top-0 right-0 w-full z-50 bg-black backdrop-blur-sm py-4 sm:py-0'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4 text-white font-bold text-2xl'>
            <img src={Logo} alt="" className='w-10' />
            <span>MIND'SCOOL</span>
          </div>

          <div className='text-white hidden sm:block'>
            <ul className='flex items-center gap-6 text-xl py-4'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About </Link></li>
              <li><Link to="/contact">Contact Us </Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/reward">RewardTree</Link></li>
            </ul>
          </div>

          <div>
            <Link to="/login">
              <button className='text-white border-2 border-white px-3 py-1 rounded-md'>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
