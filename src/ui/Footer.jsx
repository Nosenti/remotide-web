/* eslint-disable react/no-unescaped-entities */
function Footer() {
  return (
    <div className="bg-colorBrand700 h-[30%] text-colorBrand50 pt-4">
      <div className="upper flex justify-between h-[80%] mx-10">
        <div className="about w-[50%]">
          <h3 className="font-bold mb-2">About Remotide</h3>
          <p className="text-sm">
            Remotide connects Africa's brightest talents with top-tier remote
            job opportunities in Europe and North America. Bridging continents,
            we're pioneering the future of work, ensuring skills meet
            opportunity and dreams meet reality.
          </p>
        </div>
        <div className="con-socials w-[50%] text-right">
          <div className="contacts ">
            <h3 className="font-bold mb-2">Contacts</h3>
            <p className="text-greyLogo text-sm">
              Bumbogo, Kigali Innovation City, Kigali, Rwanda
            </p>
            <p className="text-greyLogo text-sm">Phone: +250781811222</p>
          </div>
          <div className="socials"></div>
        </div>
      </div>
      <hr />
      <div className="lower h-[20%] text-center mt-2">
        <p className="text-greyLogo font-semibold text-sm">
          &copy; <span id="copyright-year"></span> 2023 Remotide. All rights
          reserved.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
