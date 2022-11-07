import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const SharedLayout = () => {
  return (
    <>
    <h1>Welcome to Sri Lanka</h1>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout;