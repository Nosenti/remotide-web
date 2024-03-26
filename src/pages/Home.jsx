/* eslint-disable react/no-unescaped-entities */
import FormfacadeEmbed from '@formfacade/embed-react';
import Faq from '../ui/Faq';
import Team from '../ui/Team';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import Solution from '../ui/Solution';
import Offer from '../ui/Offer';
import { toast } from "react-hot-toast";

function Home() {
  return (
    <>
      <div className='pl-8'>
        <Header />
      </div>
      <div className='h-screen flex flex-col md:flex-row items-center px-4 md:px-12'>
        <div className='mb-8 md:mb-0 w-full md:w-1/2 pr-0 md:pr-12'>
          <div className='tagline text-2xl md:text-4xl font-bold mb-4'>
            Build Your Global Team, Seamlessly.
          </div>
          <div className='text-md md:text-2xl font-bold mb-4 text-colorBrand500'>
            Access top talent, manage projects with experts, and simplify
            international hiring—all in one place.
          </div>
          <div className='description mb-4'>
            <p className='mb-2'>
              Building a global team can be complex and time-consuming. Finding
              the right talent, managing remote workers, and navigating
              international compliance can slow you down.
            </p>
            <p className='text-gray-500 font-bold'>
              We offer a comprehensive suite of services to streamline your
              global team building and management:
            </p>
          </div>
          {/* <div className="subscribe">
            <div className="sub-title text-sm md:text-md font-black">
              <a
                className="text-colorBrand700"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc05qnYhskghatwIDGm_iZy41e7oRoJofi8zkJh1fhv00u-Eg/viewform"
              >
                Fill in the form
              </a>{" "}
              to get notified when we launch 🎉
            </div>
          </div> */}
        </div>
        <div className='w-full md:w-1/2 overflow-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4'>
            <img
              src='Akpene.jpg'
              alt='Picture 1'
              className='col-span-1 md:col-span-1 md:row-span-2 h-full w-full object-cover'
            />
            <img
              src='grid-1.jpg'
              alt='Description 2'
              className='col-span-1 h-full w-full object-cover'
            />
            <img
              src='grid-3.jpg'
              alt='Description 3'
              className='col-span-1 h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
      <div>
        <Solution />
      </div>
      <div className='flex flex-col align-center justify-center'>
        <h3 className='flex justify-center text-xl font-bold text-colorBrand500'>Ready to build your dream team?</h3>
        <div>
          <FormfacadeEmbed
            formFacadeURL='https://formfacade.com/include/100919847410360957339/form/1FAIpQLSdIb2jVzJ4ycVecRl8tnSW2DF3Ksf4ZgNVp93UwcT-vGXxB8g/classic.js/?div=ff-compose'
            onSubmitForm={() => toast.success("submitted")}
          />
        </div>
        
      </div>
      <div>
        <Offer />
      </div>

      {/* <div>
        <HowItWorks />
      </div> */}
      {/* <div>
        <HowItWorks2 />
      </div> */}
      <div>
        <Faq />
      </div>
      <div className='mb-4'>
        <Team />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
