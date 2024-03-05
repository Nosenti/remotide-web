/* eslint-disable react/no-unescaped-entities */
const Solution = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        {/* <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div> */}
        <h2 className='max-w mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          {/* <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="colorBrand500"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d0d83814-78b6-480f-9a5f-7f637616b267"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                  width="52"
                  height="24"
                />
              </svg >
              <span className="relative text-colorBrand500">Our Solution</span>
            </span>{" "} */}
          Our Services
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
              Sourcing
            </p>
          </div>
          <div className='text-sm text-gray-900'>
            <ul className='list-disc pl-5'>
              <li>
                <strong>Massive Talent Pool:</strong> Access a vast network of
                skilled professionals worldwide, expanding your hiring
                possibilities.
              </li>
              <li>
                <strong>Long-Term Focus:</strong>Find ideal candidates who are dedicated to
                remote work and long-term partnerships.
              </li>
            </ul>
          </div>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-between mb-2'>
            <p className='text-lg font-bold leading-5 text-colorBrand500 w-3/4'>
              EOR (Employer of Record)
            </p>
          </div>
          <div className='text-sm text-gray-900'>
            <ul className='list-disc pl-5'>
              <li>
                <strong>Simplified International Hiring:</strong> Hire top talent anywhere in the world without establishing a local entity, saving you time and money.

              </li>
              <li>
                <strong>Compliance Made Easy:</strong>We handle all legal and administrative tasks, ensuring you comply with local regulations.

              </li>
              <li>
                <strong>Peace of Mind:</strong>Focus on what matters—growing your business—while we take care of the complexities of international employment.
              </li>
            </ul>
          </div>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-between mb-2'>
            <p className='text-lg font-bold leading-5 text-colorBrand500 w-3/4'>
              Project Management
            </p>
          </div>
          <div className='text-sm text-gray-900'>
            <ul className='list-disc pl-5'>
              <li>
                <strong>Expert Project Management:</strong> Our experienced project managers take the reins, ensuring your projects run smoothly and meet deadlines.
              </li>
              <li>
                <strong>Deliverable-Focused:</strong> We prioritize achieving your project goals and delivering tangible results, keeping you informed every step of the way.

              </li>
              <li>
                <strong>Free Up Your Time:</strong> Delegate project management tasks to us, and focus your team's energy on core business initiatives.
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5 text-colorBrand500 w-3/4">Compliance Made Simple</p>
              
            </div>
            <p className="text-sm text-gray-900">
            Navigate the complexities of compliance effortlessly using our dedicated tool. Enter necessary information and receive a comprehensive checklist, ensuring compliance with US or EU laws. Our checklist, crafted by lawyers and accountants, keeps you worry-free.
            </p>
          </div> */}
      </div>
      {/* <div className="text-center bg-colorBrand500">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div> */}
    </div>
  );
};

export default Solution;
