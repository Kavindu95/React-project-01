import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/login'>Login</Link>
    </nav>
  );
};
export default Navbar;
