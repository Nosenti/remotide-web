/* eslint-disable react/no-unescaped-entities */
import Faq from "../ui/Faq";
import Team from "../ui/Team";

function Home() {
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row items-center px-4 md:px-12">
        <div className="mb-8 md:mb-0 w-full md:w-1/2 pr-0 md:pr-12">
          <div className="tagline text-2xl md:text-4xl font-bold mb-4">
            Powering the Global Workforce with Africa's best
          </div>
          <div className="description mb-4">
            <p>
              We're more than just a job-matching platform. We champion a future
              where technology meets sustainable development. Whether you're a
              professional eyeing international prospects or a company hunting
              for elite talent, Remotide erases borders, opening a realm of
              boundless opportunities. Dive into the future with Remotide.
            </p>
          </div>
          <div className="subscribe">
            <div className="sub-title text-sm md:text-md font-black">
              <a
                className="text-colorBrand700"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc05qnYhskghatwIDGm_iZy41e7oRoJofi8zkJh1fhv00u-Eg/viewform"
              >
                Fill in the form
              </a>{" "}
              to get notified when we launch 🎉
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
            <img
              src="Akpene.jpg"
              alt="Picture 1"
              className="col-span-1 md:col-span-1 md:row-span-2 h-full w-full object-cover"
            />
            <img
              src="grid-1.jpg"
              alt="Description 2"
              className="col-span-1 h-full w-full object-cover"
            />
            <img
              src="grid-3.jpg"
              alt="Description 3"
              className="col-span-1 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div>
        <Faq />
      </div>
      <div className="mb-4">
        <Team />
      </div>
    </>
  );
}

export default Home;
