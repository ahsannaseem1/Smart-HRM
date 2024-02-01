import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const testimonials = [
  {
    title: "Used Daily",
    quote:
      "The Smart HRM is really in line with our culture and we see our people use it pretty much every day",
    name: "John Doe",
    position: "CEO at XYZ Corp",
  },
  {
    title: "Frequent User",
    quote:
      "Smart HRM has made our HR processes efficient and saved us a lot of time in managing employee data.",
    name: "Jane Smith",
    position: "HR Manager at ABC Inc.",
  },
  {
    title: "Satisfied Customer",
    quote:
      "I am extremely satisfied with Smart HRM. It has simplified our HR tasks and improved our overall workflow.",
    name: "Alex Johnson",
    position: "CFO at LMN Corporation",
  },
  {
    title: "Happy User",
    quote:
      "Using Smart HRM has been a delightful experience for our team. The interface is user-friendly and intuitive.",
    name: "Emily Davis",
    position: "Operations Manager",
  }
];

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + visibleTestimonials >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1
    );
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      setVisibleTestimonials(3);
    } else if (screenWidth >= 480) {
      setVisibleTestimonials(2);
    } else {
      setVisibleTestimonials(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen bg-sec-color mt-12 text-white text-center font-bold pt-12 relative overflow-x-hidden">
      <h1 className="text-3xl mt-10">What Our Customers Say About Us...</h1>
      <div className="flex justify-center items-center gap-12 py-16 overflow-x-hidden px-24">
        <ArrowBackIcon
          onClick={handlePrev}
          className={`cursor-pointer absolute left-10 transition-transform transform hover:scale-110 ${
            startIndex === 0 && "opacity-50 pointer-events-none"
          }`}
        />

        {testimonials.slice(startIndex, startIndex + visibleTestimonials).map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 mt-10 bg-white w-full md:w-1/2 lg:w-1/3 h-72 text-black rounded-xl border border-gray-300 p-5 transition-transform transform hover:scale-105 hover:shadow-bg-color shadow-lg cursor-pointer`}
          >
            <div className="flex justify-center items-center">
              <p className="text-md text-extrabold">{testimonial.title}</p>
            </div>
            <hr className="border-1 border-black w-full"></hr>
            <div>
              <p className="text-sm text-gray-500 h-24 overflow-hidden text-left">{testimonial.quote}</p>
            </div>
            <div className="flex gap-2 mt-4 items-start">
              <AccountCircleIcon className="self-center" style={{ fontSize: 40 }} />
              <div>
                <p className="text-sm text-left text-bold">{testimonial.name}</p>
                <p className="text-xs text-gray-500 text-left">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}

        <ArrowForwardIcon
          onClick={handleNext}
          className={`cursor-pointer absolute right-10 transition-transform transform hover:scale-110 ${
            startIndex + visibleTestimonials >= testimonials.length && "opacity-50 pointer-events-none"
          }`}
        />
      </div>
    </div>
  );
};

export default Testimonial;
