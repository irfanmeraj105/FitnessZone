import React from "react";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black mt-50 min-h-[400px] justify-center text-gray-300 flex items-end relative py-12 px-4 sm:px-6">
        {/* absolute div */}
        <div className="bg-gradient-to-r from-[#e65753] to-[#aa50ae] absolute -top-40 rounded-3xl w-[95%] md:w-[1000px] h-auto md:h-[300px] mx-auto flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-0">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Content */}
            <div className="flex flex-col justify-center  h-auto md:h-[300px] p-4 md:p-10 space-y-4 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white leading-snug">
                Join the gymnastic family
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-md mx-auto md:mx-0">
                Getting started is easy — simply sign up, create your profile,
                and explore our diverse range of workout.
              </p>
              <button className="bg-white text-black px-5 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-black hover:text-white transition duration-300 mx-auto ">
                Get Started
              </button>
            </div>

            {/* Right Image (Hide on Mobile) */}
            <div className="hidden md:flex items-end justify-center">
              <Image
                src="/assets/footer image.png"
                width={300}
                height={300}
                unoptimized
                alt="Footer Illustration"
                className="h-[300px] w-auto"
              />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-64 md:mt-0 text-center md:text-left">
          {/* First Child (Logo + Text) */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="FitnessZone Logo"
                width={40}
                height={40}
              />
              <span className="text-white text-xl font-bold">FitnessZone</span>
            </div>
            <p className="text-sm leading-6 max-w-xs mx-auto md:mx-0">
              Transform your body, boost your energy and achieve your fitness
              goals with us.
            </p>
          </div>

          {/* Second Child (About Us) */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Mission</a></li>
              <li><a href="#" className="hover:text-white">Our Team</a></li>
              {/* Hide "Awards" on mobile */}
              <li className="hidden md:block">
                <a href="#" className="hover:text-white">Awards</a>
              </li>
            </ul>
          </div>

          {/* Third Child (Services) */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Personal Training</a></li>
              <li><a href="#" className="hover:text-white">Nutrition Plans</a></li>
              <li><a href="#" className="hover:text-white">Group Classes</a></li>
            </ul>
          </div>

          {/* Fourth Child (Resources - hidden on mobile) */}
          <div className="hidden md:block space-y-4">
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
            </ul>
          </div>

          {/* Fifth Child (Support) */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Sixth Child (Download App) */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Download App</h4>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
              >
                <FaGooglePlay size={18} /> Google Play Store
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
              >
                <FaApple size={18} /> Apple Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
