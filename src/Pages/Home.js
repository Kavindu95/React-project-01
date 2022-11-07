import React from 'react'
import About from './About'
import Contacts from './Contacts'
import {Link, Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';





const Home =() =>{
  return(
    <>
    <h1>Welcome to Sama.LK</h1>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default Home;