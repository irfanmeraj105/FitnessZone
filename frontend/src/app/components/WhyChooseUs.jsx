import React from "react";
import { TbGymnastics } from "react-icons/tb";
import { FaAward } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <>
      {/* main why choose us section */}
      <div id="whychooseus" className="mt-20 px-6 md:px-10 flex flex-col items-center justify-center">
        {/* heading and description */}
        <div className="max-w-2xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
            Why Choose <span className="text-orange-600">Fitness Zone</span>?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Choosing Fitness Zone Gym means stepping into a space designed for
            your growth, strength, and motivation. With modern equipment and a
            supportive environment, it’s the perfect place to achieve your
            fitness goals.
          </p>
        </div>

        {/* responsive grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {/* first box */}
          <div className="flex flex-col items-start p-8 rounded-2xl border border-purple-500 shadow-lg transition transform hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] bg-white">
            <div className="rounded-full mb-4 flex items-center justify-center h-14 w-14 text-3xl font-bold text-white bg-orange-600">
              <TbGymnastics />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Experienced Trainers
            </h3>
            <p className="text-justify text-gray-600 text-sm md:text-base leading-relaxed">
              An experienced trainer with a proven track record of guiding
              clients toward their fitness goals through personalized workouts
              and expert coaching. Skilled in strength training, weight
              management, and overall wellness improvement.
            </p>
          </div>

          {/* second box */}
          <div className="flex flex-col items-start p-8 rounded-2xl border border-purple-500 shadow-lg transition transform hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] bg-white">
            <div className="rounded-full mb-4 flex items-center justify-center h-14 w-14 text-3xl font-bold text-white bg-orange-600">
              <FaDumbbell />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Modern Equipment
            </h3>
            <p className="text-justify text-gray-600 text-sm md:text-base leading-relaxed">
              Equipped with the latest, state-of-the-art machines and tools, our
              gym ensures a safe, efficient, and effective workout experience.
              From strength training to cardio, every piece of equipment is
              designed to maximize performance and results.
            </p>
          </div>

          {/* third box */}
          <div className="flex flex-col items-start p-8 rounded-2xl border border-purple-500 shadow-lg transition transform hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] bg-white">
            <div className="rounded-full mb-4 flex items-center justify-center h-14 w-14 text-3xl font-bold text-white bg-orange-600">
              <FaAward />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Award Winners
            </h3>
            <p className="text-justify text-gray-600 text-sm md:text-base leading-relaxed">
              Our gym takes pride in being recognized as an award-winning
              fitness center, celebrated for excellence in training, facilities,
              and member satisfaction. These achievements reflect our commitment
              to providing the best environment for health, strength, and
              success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
