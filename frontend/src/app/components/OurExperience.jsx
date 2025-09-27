"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    text: `Fitness Zone has completely transformed my workout journey.  The trainers are supportive and the environment motivates me daily.  I feel healthier, stronger, and more confident now.  Truly the best decision I made for my fitness goals!`,
    img: "/assets/profile img one.jpg",
    name: "John Doe",
    location: "New York, USA",
  },
  {
    text: `At Fitness Zone, every session feels rewarding. The modern equipment and friendly staff make it enjoyable. I’ve gained so much strength and stamina over the months. Highly recommend this gym to anyone serious about fitness!`,
    img: "/assets/profile img two.jpg",
    name: "Jane Smith",
    location: "London, UK",
  },
  {
    text: `Joining Fitness Zone was the best thing I ever did for myself.  The classes are fun, engaging, and push me to my limits. The atmosphere is always positive and welcoming.  I finally found my fitness family here!`,
    img: "/assets/profile img three.jpg",
    name: "Michael Lee",
    location: "Toronto, Canada",
  },
];

const OurExperience = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(1); // default safe for SSR

  // ✅ Update visible count on mount + resize
  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth >= 1024 ? 2 : 1);
    };

    handleResize(); // run once after mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const displayedReviews = reviews.slice(current, current + visible);

  return (
    <div id="testimonials" className="max-w-6xl mx-auto py-12 px-4 space-y-10">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          Our <span className="text-orange-600">Experiences</span> <br />
          Customer <span className="text-orange-600">Satisfaction</span>
        </h2>

        {/* Arrows */}
        <div className="flex items-center gap-4">
          <div
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black cursor-pointer hover:bg-black hover:text-white transition"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-600 text-white cursor-pointer hover:bg-orange-700 transition"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        <div className={`grid grid-cols-1 ${visible === 2 ? "md:grid-cols-2" : ""} gap-6`}>
          {displayedReviews.map((review, index) => (
            <div
              key={index}
              className="border p-6 rounded-xl space-y-4 hover:shadow-lg hover:shadow-gray-800 hover:-translate-y-2 transition transform duration-300 bg-white"
            >
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {review.text}
              </p>

              {/* Profile + Quote */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <span className="text-sm text-gray-500">{review.location}</span>
                  </div>
                </div>
                <FaQuoteRight className="text-5xl text-orange-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 cursor-pointer h-3 rounded-full ${
                index === current ? "bg-orange-600" : "bg-gray-300"
              } transition`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExperience;
