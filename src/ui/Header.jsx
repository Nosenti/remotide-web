import { Link } from 'react-router-dom';

//import Button from "./Button";
function Header() {
  return (
    <div className='flex justify-between items-center p-4 md:p-6 lg:p-8'>
      <div className='left flex items-center'>
        
        <img
          className='h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10'
          src='logo-1.svg'
          alt='logo'
        />
        <span className='ml-2 text-greyLogo text-xl md:text-2xl lg:text-3xl font-bold'>
          <Link to='/'>
          Remotide
          </Link>
          
        </span>
      </div>

      <div className='right  py-1 flex flex-row'>
        <div className=' mr-5'>
          <Link
            to='/talent'
            className='inline-block px-6 py-3 bg-colorBrand500  text-white font-medium text-xs leading-tight uppercase rounded hover:bg-colorBrand700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
          >
            Talent Board
          </Link>
        </div>
        <div className=' mr-5'>
          <Link
            to='/product'
            className='inline-block px-6 py-3 bg-colorBrand500  text-white font-medium text-xs leading-tight uppercase rounded hover:bg-colorBrand700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
          >
            About Product
          </Link>
        </div>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSc05qnYhskghatwIDGm_iZy41e7oRoJofi8zkJh1fhv00u-Eg/viewform'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block px-6 py-3 bg-colorBrand500  text-white font-medium text-xs leading-tight uppercase rounded hover:bg-colorBrand700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
        >
          Signup for Beta
        </a>
      </div>
    </div>
  );
}

export default Header;
