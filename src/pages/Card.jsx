/* eslint-disable react/prop-types */

const CardComponent = ({ imageSrc, index, roles, buttonLink }) => {
    return (
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-md mx-auto">
        <div className="md:flex-shrink-0">
          <img src={imageSrc} alt={`Talent ${index}`} className="h-48 w-full object-cover md:w-48" />
        </div>
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Talent {index}</h2>
            <p className="text-gray-700 text-base mb-4 overflow-hidden text-ellipsis">
              Roles Interested: <span className="text-gray-900 font-semibold">{roles}</span>
            </p>
            <p className="text-gray-700 text-base">
              Education: <span className="font-semibold">Masters Degree</span>
            </p>
          </div>
          <div className="mt-auto">
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 transition duration-150 ease-in-out">Connect on LinkedIn</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardComponent;
