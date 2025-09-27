import React from "react";
import { ImNewTab } from "react-icons/im";

const Blog = () => {
  return (
    <>
      <div id="blog" className="bg-white py-12 px-6 md:px-12">
        {/* Wrapper */}
        <div className="max-w-5xl mx-auto">
          {/* Heading + Para + Button */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl text-center lg:text-start font-bold text-gray-900">
              Our Latest <span className="text-orange-600">Blog</span>
            </h2>

            {/* Paragraph + Button */}
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between mt-4 md:mt-6 gap-4">
              <p className="text-gray-700 lg:text-start md:text-lg text-center leading-relaxed animate-fadeIn">
                We provide support specific training <br />
                to help athletes get in the best shape of their life.
              </p>

              <button
                className="
                  bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold uppercase
                  transition-all duration-300 ease-in-out 
                  hover:bg-orange-500 hover:scale-105 hover:shadow-md
                  active:scale-95
                  motion-safe:animate-bounce md:motion-safe:animate-none
                "
              >
                See All Blog
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto my-10">
          {/* Left side */}
          <div className="grid grid-cols-2 gap-6 relative">
            {[
              "Workout Program",
              "Training Plan",
              "Healthy Plan",
              "Expert Trainers",
            ].map((text, index) => (
              <div
                key={index}
                className="
                  relative bg-orange-50 p-6 rounded-xl flex flex-col justify-end
                  shadow-lg shadow-gray-800 
                  transition-all duration-500 ease-in-out 
                  hover:scale-105 hover:shadow-2xl 
                  animate-slideUp md:animate-none
                "
              >
                {/* Circle Icon */}
                <div
                  className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center ${
                    index === 0 ? "bg-orange-600" : "border border-orange-600"
                  }`}
                >
                  <ImNewTab
                    className={`${
                      index === 0 ? "text-white" : "text-orange-600"
                    }`}
                  />
                </div>

                <h4 className="text-lg font-semibold mt-4">{text}</h4>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div
            className="rounded-xl bg-cover relative bg-center h-[300px] md:h-[400px] animate-fadeIn md:animate-none"
            style={{ backgroundImage: "url('/assets/section 4 img.jpg')" }}
          >
            {/* absolute card */}
            <div className="absolute bottom-0 right-0 p-5 w-[220px] md:w-[250px] rounded-tl-2xl flex justify-center items-center bg-gray-50 motion-safe:animate-slideInRight md:motion-safe:animate-none">
              <div className="border border-gray-300 rounded-xl p-3 text-center shadow-md shadow-black">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                  1219+
                </h4>
                <p className="text-gray-600 mt-1">Member Joined</p>

                {/* Avatars */}
                <div className="flex justify-center items-center mt-4 space-x-[-10px]">
                  {["three", "two", "one"].map((img, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden animate-bounce md:animate-none"
                    >
                      <img
                        src={`/assets/profile img ${img}.jpg`}
                        alt={`Member ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white bg-orange-600 flex items-center justify-center text-white text-xs font-semibold animate-pulse md:animate-none">
                    +1k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
