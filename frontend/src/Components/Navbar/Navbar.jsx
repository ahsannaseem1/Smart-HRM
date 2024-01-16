import React from "react";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Navbar(props) {
  return (
    <>
    <div className="bg-bg-color">
      <header className="bg-bg-color flex flex-col items-center px-4 py-6 max-md:px-2">
        <div className="flex w-full max-w-[1527px] items-stretch justify-between gap-5 max-md:flex-wrap max-md:justify-center">
          <h1 className="text-white text-2xl italic font-extrabold self-center">
            Smart HRM
          </h1>
          <div className="self-center flex items-start justify-between gap-12 max-md:flex-wrap max-md:justify-center">
            <a href="#" className="text-white text-lg ">
              Home
            </a>
            <a href="#" className="text-white text-lg">
              Pricing
            </a>
            <a href="#" className="text-white text-lg">
              Jobs
            </a>
            <a href="#" className="text-white text-lg">
              Contact
            </a>
          </div>
          <div className="flex gap-2 bg-white border-1 border-black rounded-2xl px-2 py-1 font-bold active:text-white active:bg-bg-color cursor-pointer">
            <ArrowCircleRightOutlinedIcon></ArrowCircleRightOutlinedIcon><text>Login</text>
          </div>
        </div>
      </header>
      <main className="w-full max-w-[1527px] mt-4 mb-12 max-md:my-2">
      <div className="flex justify-around my-12 pb-36">
        <div className="w-1/3 flex flex-col justify-center gap-4">
        
              <h2 className="text-white text-4xl font-bold max-md:text-2xl">
                The easy way to streamline your HR
              </h2>
              <p className="text-white text-xl leading-[30px] mt-6">
                Smart HRM is a web-based HR platform that helps Pakistani startup businesses streamline their HR processes.
              </p>
              <div className="w-28 mt-4 flex gap-2 bg-white border-1 border-black rounded-2xl px-2 py-1 font-bold active:text-white active:bg-bg-color cursor-pointer">
            <ArrowCircleRightOutlinedIcon></ArrowCircleRightOutlinedIcon><text>Register</text>
          </div>
            
        </div>
        <div className="w-1/3 text-center">
        <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1faceaacaacdae3d919f8b883024b12a0117fa41d8c34419779056d292b876b8?apiKey=9d1bb6ffb4f242aba221efc5a286029f&width=400"
              className="aspect-[0.97] object-contain object-center w-full overflow-hidden mt-4 cursor-pointer"
              alt="Image"
            />
        </div>
      </div>
             </main>
      </div>
    </>
  );
}

export default Navbar;
