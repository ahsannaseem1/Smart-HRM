import React from "react";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

function Home(props) {
  return (
    <div className="bg-sec-color h-screen w-screen flex flex-col overflow-x-hidden">
      <header className="w-full px-4 py-4 fixed top-0 backdrop-filter backdrop-blur-sm bg-opacity-70 bg-sec-color z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Smart HRM Logo on the left */}
          <h1 className="text-white text-2xl ml-10 cursor-pointer">
            <span className="font-thin">Smart</span>
            <span className="font-extrabold"> HRM</span>
          </h1>

          {/* Navbar Items centered */}
          <nav className="hidden md:flex items-center gap-5">
            <ul className="flex gap-4 h-10">
              <li className="flex items-center">
                <a href="#" className="text-white text-md hover:text-xl w-20 inline-block h-full flex items-center justify-center hover:border-b-2 border-bg-color">Home</a>
              </li>
              <li className="flex items-center">
                <a href="#" className="text-white text-md hover:text-xl w-20 inline-block h-full flex items-center justify-center hover:border-b-2 border-bg-color">Pricing</a>
              </li>
              <li className="flex items-center">
                <a href="#" className="text-white text-md hover:text-xl w-20 inline-block h-full flex items-center justify-center hover:border-b-2 border-bg-color">Jobs</a>
              </li>
              <li className="flex items-center">
                <a href="#" className="text-white text-md hover:text-xl w-20 inline-block h-full flex items-center justify-center hover:border-b-2 border-bg-color">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Login button on the right */}
          <div className="flex items-center mr-10">
          <button
              className="bg-bg-color px-3 py-1.5 rounded-3xl border-none font-bold text-center cursor-pointer transition duration-400 hover:shadow-lg hover:shadow-gray-400 active:transform active:scale-97 active:shadow-lg"
            >
              <ArrowCircleRightRoundedIcon className="inline-block" style={{ color: 'white' }} />
              <span className="ml-2 text-white">Login</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Section with Image */}
      <main className="flex-grow flex items-center justify-center">
        <div className="w-1/2 text-center">
          <h2 className="text-white lg:text-5xl font-bold md:text-4xl sm:text-3xl text-2xl leading-8">
            The easy way to <span className="text-bg-color">streamline</span> your HR & Recruitment
          </h2>

          <p className="text-gray-300 lg:text-xl mt-6 md:text-lg sm:text-md text-sm ">
            Smart HRM is a web-based HR platform that helps Pakistani startup businesses streamline their HR & Payroll processes.
          </p>
          <div className="flex justify-center items-center mt-8">
            <button
              className="bg-bg-color px-3 py-1.5 rounded-3xl border-none font-bold text-center cursor-pointer transition duration-400 hover:shadow-lg hover:shadow-gray-400 active:transform active:scale-97 active:shadow-lg"
            >
              <ArrowCircleRightRoundedIcon className="inline-block" style={{ color: 'white' }} />
              <span className="ml-2 text-white">Start for Free</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
