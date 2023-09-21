import Button from "./Button";

function Header() {
  return (
    <div className="flex justify-between ml-10 mt-4 mx-12 pl-4">
      <div className="left flex items-center">
        <img className="h-7 w-7" src="logo-1.svg" alt="logo" />
        <span className="ml-2 text-greyLogo text-2xl font-bold">Remotide</span>
      </div>
      <div className="right mr-10">
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
