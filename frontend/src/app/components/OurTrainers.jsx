import Image from "next/image";
import React from "react";

const OurTrainers = () => {
  return (
    <>
      <div id="trainers" className="bg-black p-10">
        {/* div for the heading and para / */}

        <div>
          <h2 className="text-3xl text-center text-white font-bold">
            Meet Our <span className="text-orange-600 ">Trainers</span>
          </h2>
          <p className="text-white text-center my-10">
            We provide specific training for athletes to get in the best shape
            of their life.
          </p>
        </div>

        {/* div for the grid of the images  */}

        <div className="grid w-[80vw] [&>div]:rounded-xl  mx-auto gap-[13px]  grid-cols-[0.5fr_0.5fr_1fr_1fr] grid-rows-[231px_124px_231px]">
          {/* image one  */}
          <div
            className="bg-cover bg-center row-span-1 col-span-2 flex flex-col justify-between p-6 text-white rounded-xl"
            style={{ backgroundImage: "url('/assets/section 3 img 1.jpg')" }}
          >
            {/* Content only visible on md and above */}
            <div className="hidden md:flex flex-col justify-between h-full">
              {/* Top content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Have 100+</h3>
                <p className="mt-2 text-sm md:text-base">
                  Our expert trainers are here to guide you for lasting results.
                </p>
              </div>

              {/* Bottom button */}
              <button
                className="
        mt-4 bg-orange-600 text-white uppercase flex items-center gap-2 px-5 py-2 
        rounded-lg font-semibold self-start
        transition-all duration-300 ease-in-out 
        hover:bg-orange-500 hover:scale-105 hover:shadow-lg
        active:scale-95
      "
              >
                See More
                <span className="text-lg">➝</span>
              </button>
            </div>
          </div>

          {/* image two  */}
          <div
            className="bg-cover bg-top   row-span-2 col-span-2"
            style={{ backgroundImage: "url('/assets/section 3 img 2.jpg')" }}
          ></div>
          {/* image three  */}
          <div className="bg-gradient-to-b from-[#905050] to-[#2a1818] flex flex-col items-center justify-center row-span-1 col-span-2">
            <span className="text-4xl font-bold text-white">100+</span>
            <p className="text-white">Trainers</p>
          </div>
          {/* image four  */}
          <div
            className=" bg-cover bg-center   row-span-1 col-span-3"
            style={{ backgroundImage: "url('/assets/section 3 img 3.jpg')" }}
          ></div>
          {/* image five  */}
          <div
            className=" bg-center bg-cover  row-span-1 col-span-1"
            style={{ backgroundImage: "url('/assets/section 3 img 4.jpg')" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default OurTrainers;
