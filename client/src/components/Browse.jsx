import React, { useEffect } from 'react';
import Header from './Header.jsx';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


const  Browse = () =>  {
    const user = useSelector(store => store.app.user);
    // const toggle = useSelector(store => store.movie.toggle);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    








    useEffect(() => {
        if(!user) {
          navigate('/'); 
        }
        
    }, []);


  return (
    <div>
          
            <Header />
               <div>
{/* 
               {
                  toggle ? <SearchMovie /> : (
                    <>
                    <MainContainer />
                    <MovieContainer />
                    
                    
                    </>
                  )


               } */}

                  
               </div>
          
    </div>
  )
}

export default Browse;