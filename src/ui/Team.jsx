/* eslint-disable react/no-unescaped-entities */
function Team() {
  return (
    <div className="my-4 mx-4">
      <div className="text-center text-2xl font-bold">Team</div>
      <div className="text-center py-4 w-full md:w-3/4 lg:w-1/2 flex m-auto mb-4">
        Meet the dynamic team behind Remotide. Each member brings a unique blend
        of expertise, passion, and vision to our mission, ensuring we bridge the
        gap between African talent and global opportunities. Dive in to learn
        more about the minds powering our platform
      </div>
      <div className="team-members flex flex-wrap justify-center md:justify-between">
        <div className="member-1 w-full md:w-[45%] lg:w-[20%] h-[50vh] my-4 relative group hover:bg-transparent rounded-lg overflow-hidden border border-transparent hover:border-blue-500">
          <div className="w-full h-full overflow-hidden">
            <img
              src="Akpene.jpg"
              alt="Akpene"
              className="transition-transform duration-500 transform group-hover:scale-110 w-full h-full object-cover object-top"
            />
          </div>

          {/* <!-- Blue Overlay, initially hidden, appears on hover --> */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>

          {/* <!-- About Akpene, initially hidden, appears on hover --> */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <div className="hidden group-hover:block text-white text-center mb-10 text-sm p-1">
              Akpene epitomizes the essence of a multifaceted professional. With
              a diverse background spanning from the realms of fashion to IT
              consulting, her versatility is unparalleled. Outside the
              workspace, you'll find her exploring nature's trails or indulging
              in her passion for discovering unique tea blends.
            </div>
            <a
              href="https://www.linkedin.com/in/akpenehoggar/"
              target="_blank"
              rel="noreferrer"
              className="hidden group-hover:block text-white bg-blue-600 px-3 py-2 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out absolute bottom-5"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* <!-- Name and Title, initially shown, hidden on hover --> */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-colorBrand700 text-white flex flex-col justify-center items-center group-hover:hidden z-20">
            <div className="font-bold">Akpene Diata Hoggar</div>
            <div>CEO</div>
          </div>
        </div>
        <div className="member-1 w-full md:w-[45%] lg:w-[20%] h-[50vh] my-4 relative group hover:bg-transparent rounded-lg overflow-hidden border border-transparent hover:border-blue-500">
          <div className="w-full h-full overflow-hidden">
            <img
              src="carl.jpg"
              alt="Carl Lemfon"
              className="transition-transform duration-500 transform group-hover:scale-110 w-full h-full object-cover object-top"
            />
          </div>

          {/* <!-- Blue Overlay, initially hidden, appears on hover --> */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>

          {/* <!-- About Akpene, initially hidden, appears on hover --> */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <div className="hidden group-hover:block text-white text-center mb-10 text-sm p-1">
              Karl is the embodiment of a tech-savvy visionary with notable
              achievements. Passionate about harnessing technology to effect
              positive societal change, he also delves deep into the world of
              public policy. When he's not shaping the future, Karl is likely
              immersed in a book, boasting a collection that might just outshine
              yours.
            </div>
            <a
              href="https://www.linkedin.com/in/karllemfon/"
              target="_blank"
              rel="noreferrer"
              className="hidden group-hover:block text-white bg-blue-600 px-3 py-2 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out absolute bottom-5"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* <!-- Name and Title, initially shown, hidden on hover --> */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-colorBrand700 text-white flex flex-col justify-center items-center group-hover:hidden z-20">
            <div className="font-bold">Karl Lemfon</div>
            <div>CMO</div>
          </div>
        </div>
        <div className="member-1 w-full md:w-[45%] lg:w-[20%] h-[50vh] my-4 relative group hover:bg-transparent rounded-lg overflow-hidden border border-transparent hover:border-blue-500">
          <div className="w-full h-full overflow-hidden">
            <img
              src="tunga-copy.jpg"
              alt="Akpene"
              className="transition-transform duration-500 transform group-hover:scale-110 w-full h-full object-cover object-top"
            />
          </div>

          {/* <!-- Blue Overlay, initially hidden, appears on hover --> */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>

          {/* <!-- About Akpene, initially hidden, appears on hover --> */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <div className="hidden group-hover:block text-white text-center mb-10 text-sm p-1">
              Tunga is a dedicated software engineer, educator and entrepreneur.
              Her technical expertise and passion to teach has led her to
              mentoring over 2,700 budding engineers. Off-duty, she relishes the
              city's culinary delights or savors nature's tranquility
            </div>
            <a
              href="https://www.linkedin.com/in/tunga-tessema/"
              target="_blank"
              rel="noreferrer"
              className="hidden group-hover:block text-white bg-blue-600 px-3 py-2 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out absolute bottom-5"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* <!-- Name and Title, initially shown, hidden on hover --> */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-colorBrand700 text-white flex flex-col justify-center items-center group-hover:hidden z-20">
            <div className="font-bold">Tunga Tessema</div>
            <div>COO</div>
          </div>
        </div>
        <div className="member-1 w-full md:w-[45%] lg:w-[20%] h-[50vh] my-4 relative group hover:bg-transparent rounded-lg overflow-hidden border border-transparent hover:border-blue-500">
          <div className="w-full h-full overflow-hidden">
            <img
              src="innocent-suit-copy1.jpg"
              alt="Innocent Ingabire picture"
              className="transition-transform duration-500 transform group-hover:scale-110 w-full h-full object-cover object-center"
            />
          </div>

          {/* <!-- Blue Overlay, initially hidden, appears on hover --> */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>

          {/* <!-- About Akpene, initially hidden, appears on hover --> */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <div className="hidden group-hover:block text-white text-center mb-10 text-sm p-1">
              Innocent is a seasoned full-stack Javascript engineer. With more
              than 2 years under his belt, he's not just an engineer, but also
              an avid reader, and an occasional Medium contributor. When the
              tech world quiets, you'll find him engrossed in a book or
              relishing moments of serene nothingness
            </div>
            <a
              href="https://www.linkedin.com/in/innocent-ingabire/"
              target="_blank"
              rel="noreferrer"
              className="hidden group-hover:block text-white bg-blue-600 px-3 py-2 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out absolute bottom-5"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* <!-- Name and Title, initially shown, hidden on hover --> */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-colorBrand700 text-white flex flex-col justify-center items-center group-hover:hidden z-20">
            <div className="font-bold">Innocent Ingabire</div>
            <div>CTO</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
