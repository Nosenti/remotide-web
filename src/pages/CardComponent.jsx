/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const CardComponent = ({ imageSrc, index, roles, buttonText, buttonLink, onButtonClick }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent link from opening
    onButtonClick(buttonLink);
  };
    return (
      <div className="card bg-base-100 shadow-xl flex flex-col">
        <figure className="h-48 overflow-hidden">
          <img src={imageSrc} alt={`Talent ${index}`} className="object-cover w-full h-full" />
        </figure>
        <div className="card-body flex-grow">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="card-title">Talent {index}</h2>
              <p className="text-sm"> <span className="font-bold">Roles Interested:</span> {roles}</p>
              <p className="text-sm"><span className="font-bold">Education:</span> Master's Degree</p>
            </div>
            <div className="card-actions mt-4 w-full">
              <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="btn w-full bg-colorBrand500 hover:bg-colorBrand700 text-white" onClick={handleClick}>{buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardComponent;
  