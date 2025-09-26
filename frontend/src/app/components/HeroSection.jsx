import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center justify-around bg-[radial-gradient(circle,white_40%,#FF8080_200%)] min-h-screen px-5 lg:px-0">
        
        {/* ========== Mobile Hero Background Image ========== */}
        <div className="absolute inset-0 block lg:hidden">
          <Image
            src="/assets/hero section img.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-30"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#FF8080]/40"></div>
        </div>

        {/* floating shapes (only desktop & tablet) */}
        <div className="hidden lg:block w-[15px] h-[20px] absolute top-30 left-125 rotate-40 bg-blue-600"></div>
        <div className="hidden lg:block w-[15px] h-[20px] absolute top-86 left-165 rotate-35 bg-[#FF8080]"></div>
        <div className="hidden lg:block w-[15px] h-[20px] absolute top-70 left-13 rotate-60 bg-gray-600"></div>

        {/* Heart Rate Card (desktop only) */}
        <div className="hidden lg:flex flex-col items-start justify-start bg-white shadow-2xl shadow-gray-700 rotate-10 rounded-lg p-3 w-30 absolute top-70 left-200">
          <div className="bg-pink-100 p-3 rounded mb-2">
            <FaHeart className="text-red-500 text-2xl" />
          </div>
          <span className="text-gray-600 font-medium">Heart Rate</span>
          <span className="font-medium text-gray-900">2723 bpm</span>
        </div>

        {/* Dumbbell + Heart (desktop only) */}
        <div className="hidden lg:flex flex-col absolute top-20 right-30 -rotate-15 bg-pink-100 shadow-gray-400 items-center justify-center rounded-lg shadow-md w-16 h-15">
          <FaHeart className="text-red-500 text-2xl mb-1" />
          <FaDumbbell className="text-gray-700 text-2xl -rotate-10 " />
        </div>

        {/* Graph Card (desktop only) */}
        <div className="hidden lg:flex flex-col absolute top-50 right-10 items-center justify-center bg-white shadow-md rounded-lg p-2 w-auto">
          <span className="text-gray-600 font-medium">Daily Calories</span>
          <span className="text-xl font-bold text-gray-900 mb-4">1220 Cal</span>
          <div className="flex items-end gap-2">
            {[
              "55%", "70%", "90%", "60%", "30%", "40%", "20%",
            ].map((h, i) => (
              <div key={i} className="w-[10px] h-20 bg-gray-200 rounded-md flex items-end">
                <div className="w-full" style={{ height: h, background: "#f97316", borderRadius: "0.25rem" }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative text-center lg:text-left max-w-lg z-10">
          <span className="text-[#8B3AFF]">Best Place For</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
            Reach Your Body <br /> Goals At Fitness Zone
          </h1>
          <p className="text-gray-700 mt-3 text-sm sm:text-base">
            We believe that the potential to achieve desired health and wellness
            goals lies within everyone.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-5 items-center justify-center lg:justify-start">
            <Link
              href="/"
              className="cursor-pointer bg-[#f85d34] hover:bg-[#d94a24] transition px-5 py-2 rounded text-white font-semibold shadow-md"
            >
              Join Now
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2  hover:text-[#d94a24] font-medium"
            >
              <FaCirclePlay className="text-[#f85d34]" size={26} />
              <span className="underline">Watch Video</span>
            </Link>
          </div>

          {/* Figures */}
          <div className="flex gap-6 items-center justify-center lg:justify-start mt-10">
            <div>
              <span className="font-bold text-lg sm:text-xl">110+</span>
              <p className="text-sm">Expert Trainers</p>
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl">1219+</span>
              <p className="text-sm">Member Joined</p>
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl">10+</span>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Hero Image (only desktop & tablet) */}
        <div className="mt-10 lg:mt-0 hidden lg:block">
          <Image
            className="w-[250px] sm:w-[350px] lg:w-[450px] mx-auto"
            src="/assets/hero section img.png"
            alt="Hero Section Image"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
