//import Button from "./Button";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 md:p-6 lg:p-8">
      <div className="left flex items-center">
        <img
          className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
          src="logo-1.svg"
          alt="logo"
        />
        <span className="ml-2 text-greyLogo text-xl md:text-2xl lg:text-3xl font-bold">
          Remotide
        </span>
      </div>
      <div className="right bg-colorBrand500 py-1">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc05qnYhskghatwIDGm_iZy41e7oRoJofi8zkJh1fhv00u-Eg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2  text-white font-medium text-xs leading-tight uppercase rounded hover:bg-colorBrand700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Signup for Beta
        </a>
      </div>
    </div>
  );
}

export default Header;
