// import { useForm } from "react-hook-form";
// import Button from "../ui/Button";
// import Input from "../ui/Input";
import Faq from "../ui/Faq";
import Team from "../ui/Team";

// import { getInterests } from "../services/apiInterests";
// import toast from "react-hot-toast";

/* eslint-disable react/no-unescaped-entities */
function Home() {
  // const { register, handleSubmit } = useForm();

  // function onSubmit(data) {
  //   console.log("data: ", data.email);
  // }

  return (
    <>
      <div className="h-[90vh] align-middle flex items-center px-12 ">
        <div className="left w-[50%] pr-12">
          <div className="tagline text-4xl font-bold mb-4">
            Powering the Global Workforce with Africa's best
          </div>
          <div className="description mb-4">
            <p className="">
              We're more than just a job-matching platform. We champion a future
              where technology meets sustainable development. Whether you're a
              professional eyeing international prospects or a company hunting
              for elite talent, Remotide erases borders, opening a realm of
              boundless opportunities. Dive into the future with Remotide.
            </p>
          </div>
          <div className="subscribe">
            <div className="sub-title text-md font-black">
              <a
                className="text-colorBrand700"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc05qnYhskghatwIDGm_iZy41e7oRoJofi8zkJh1fhv00u-Eg/viewform"
              >
                Fill in the form
              </a>{" "}
              to get notified when we launch 🎉
            </div>
            {/* <form className="sub-form mt-3" onSubmit={handleSubmit(onSubmit)}>
              <span className="mr-3">
                <Input
                  type="text"
                  id="email"
                  placeholder="email@example.com"
                  {...register("email")}
                />
              </span>
              <Button type="submit" size="inputSize">
                Notify Me
              </Button>
            </form> */}
          </div>
        </div>
        <div className="right w-[50%] overflow-hidden">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src="Akpene.jpg"
              alt="Picture 1"
              className="col-span-1 row-span-2 h-full w-full object-cover"
            />
            <img
              src="grid-1.jpg"
              alt="Description 2"
              className="col-span-1 row-span-1 h-full w-full object-cover"
            />
            <img
              src="grid-3.jpg"
              alt="Description 3"
              className="col-span-1 row-span-1 h-full w-full object-cover"
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
