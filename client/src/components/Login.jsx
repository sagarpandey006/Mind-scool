import React, { useState } from 'react';
import Header from './Header';
import PlaceFormPage from '../pages/PlacesFormPage.jsx'; 
import HeroCard from './HeroCard/HeroCard2.jsx';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLoading } from '../redux/userSlice.jsx';

// Define or import API_END_POINT
const API_END_POINT = 'http://localhost:8080/api/v1/user'; // Make sure to replace this with your actual API endpoint

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const user = isLogin ? { email, password } : { fullName, email, password };
    const apiUrl = isLogin ? `${API_END_POINT}/login` : `${API_END_POINT}/register`;

    try {
      const res = await axios.post(apiUrl, user, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (res && res.data) {
        toast.success(res.data.message);
        if (isLogin) {
          dispatch(setUser(res.data.user));
          navigate('/HeroCard');
        } else {
          setIsLogin(true);
        }
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
      console.log(error);
    } finally {
      dispatch(setLoading(false));
      setFullName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          className='w-[100vw] h-[100vh]'
          // src='https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg' 
          // src='https://media.istockphoto.com/id/1330020430/photo/image-lawyer-businessman-sitting-at-the-office-with-a-woman-customer-explaining-the-agreement.jpg?s=612x612&w=0&k=20&c=sQs018kCsBMAdX82LcG3vKAh559b1J9caMDSLpCpFrA=' 
          src='https://cdn.pixabay.com/photo/2022/07/15/18/27/mental-health-7323725_640.png'
          alt='background'
        />
      </div>
      <form
        onSubmit={getInputData}
        className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'
      >
        <h1 className='text-3xl text-white mb-5 font-bold'>
          {isLogin ? 'Login' : 'Signup'}
        </h1>

        <div className='flex flex-col'>
          {!isLogin && (
            <input
              type='text'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Full Name'
              className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
          />
          <button
            type='submit'
            className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'
          >
            {isLoading ? 'Loading...' : isLogin ? 'Login' : 'Signup'}
          </button>
          <p className='text-white mt-2'>
            {isLogin ? 'New to MindScool?' : 'Already have an account?'}
            <span
              onClick={loginHandler}
              className='ml-1 text-blue-900 font-medium cursor-pointer'
            >
              {isLogin ? 'Signup' : 'Login'}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
