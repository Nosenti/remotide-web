import Button from "./Button";

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
      <div className="right">
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
