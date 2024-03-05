/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        {/* <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div> */}
        <h2 className='max-w mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='colorBrand500'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='d0d83814-78b6-480f-9a5f-7f637616b267'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#d0d83814-78b6-480f-9a5f-7f637616b267)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative text-colorBrand500'>2 WEEKS OFFER:</span>
          </span>{' '}
          Gain access to a curated pool of qualified candidates, ready to join
          your global team.
        </h2>
        {/* <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p> */}
      </div>
      <div className='relative grid gap-12 row-gap-6 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2'>
        {/* <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
              <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
            </div> */}
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-between mb-2'>
            <p className='text-lg font-bold leading-5 text-colorBrand500 w-3/4'>
              Looking for talented individuals to bolster your global workforce?
            </p>
          </div>
          <div className='text-sm text-gray-900'>
            We've handpicked a diverse pool of 200+ skilled professionals across
            various fields, all eager to contribute to your success.
          </div>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-between mb-2'>
            <p className='text-lg font-bold leading-5 text-colorBrand500 w-3/4'>
              Browse their profiles and connect directly
            </p>
          </div>
          <div className='text-sm text-gray-900'>
            We provide curated information, including relevant skills,
            experience, and contact details, allowing you to initiate meaningful
            conversations and explore potential collaborations.
          </div>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-between mb-2'>
            <p className='text-lg font-bold leading-5 text-colorBrand500 w-3/4'>
              Save time and resources
            </p>
          </div>
          <div className='text-sm text-gray-900'>
            Skip the extensive search process and focus on building
            relationships with pre-vetted candidates who share your vision.
          </div>
        </div>
      </div>
      <div className=' flex justify-center flex-col align-center'>
        <p className='flex mb-4 justify-center'>
            <p><strong>Start building your dream team today! </strong> </p>
            <p className='ml-1'>
            Explore our
          curated talent pool and<strong> connect with the right fit </strong>{' '}
          for your business needs.
            </p>
          
        </p>

        <div className='flex mr-5 justify-center'>
          <Link
            to='/talent'
            className='inline-block px-12 py-4 bg-colorBrand500  text-white font-medium text-xs leading-tight uppercase rounded hover:bg-colorBrand700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
          >
            Talent Board
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
