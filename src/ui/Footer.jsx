/* eslint-disable react/no-unescaped-entities */
function Footer() {
  return (
    <div className="bg-colorBrand700 text-colorBrand50 pt-4 px-4 md:px-8 lg:px-12">
      <div className="upper flex flex-col md:flex-row justify-between mx-auto w-full md:w-11/12 lg:w-10/12">
        <div className="about mb-6 md:mb-0 md:w-1/2 lg:w-1/3">
          <h3 className="font-bold mb-2">About Remotide</h3>
          <p className="text-sm">
            Remotide connects Africa's brightest talents with top-tier remote
            job opportunities in Europe and North America. Bridging continents,
            we're pioneering the future of work, ensuring skills meet
            opportunity and dreams meet reality.
          </p>
        </div>
        <div className="con-socials md:w-1/2 lg:w-1/3">
          <div className="contacts mb-4">
            <h3 className="font-bold mb-2">Contacts</h3>
            <p className="text-greyLogo text-sm">
              Bumbogo, Kigali Innovation City, Kigali, Rwanda
            </p>
            <p className="text-greyLogo text-sm">Phone: +250781811222</p>
          </div>
          <div className="socials"></div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="lower text-center">
        <p className="text-greyLogo font-semibold text-sm">
          &copy; <span id="copyright-year"></span> 2023 Remotide. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
