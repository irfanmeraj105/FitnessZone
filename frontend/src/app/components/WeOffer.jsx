import React from "react";
import Image from "next/image";
import { ImNewTab } from "react-icons/im";

const WeOffer = () => {
  // Desktop ke liye jo images use ho rahi hain unhi ka set
  const services = [
    { id: 1, title: "Group Training", img: "/assets/section 2 img 1.jpg" },
    { id: 2, title: "Advanced Classes", img: "/assets/section 2 img 2.jpg" },
    { id: 3, title: "Personal Training", img: "/assets/section 2 img 3.jpg" },
    { id: 4, title: "Live Streaming", img: "/assets/section 2 img 4.jpg" },
  ];

  return (
    <div className="bg-[radial-gradient(circle,white_40%,#FF8080_200%)] mt-20 py-10">
      {/* Section heading */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-4 px-4 text-center md:text-left">
        <h2 className="text-2xl font-bold md:text-3xl ">
          We <span className="text-orange-600">offer</span> you fitness in <br /> comfort and pleasure.
        </h2>
        <p className="text-sm md:text-base">
          If your goal is weight loss, toning up, improving <br />
          flexibility, or strengthening your body, vitality vibe <br />
          is where you need to be.
        </p>
      </div>

      {/* Mobile / Tablet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden px-6 mt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full bg-white/40 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={200}
              height={300}
              unoptimized
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
            <div className="flex p-2 items-center justify-between">
              <p className="text-sm md:text-base">{service.title}</p>
              <span className="rounded-full flex items-center justify-center h-10 w-10 text-2xl font-bold text-white bg-orange-600">
                <ImNewTab />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop absolute positioned */}
      <div className="hidden md:flex h-[73vh] relative items-center justify-between">
        {/* service one */}
        <div className="w-[200px] absolute top-23 left-43 hover:scale-105 hover:shadow-2xl transition duration-300">
          <Image
            src="/assets/section 2 img 1.jpg"
            alt="Service One"
            width={200}
            height={300}
            unoptimized
            className="w-[200px] h-[300px] object-cover rounded-lg"
          />
          <div className="flex p-2 items-center justify-between">
            <p>Group Training</p>
            <span className="rounded-full flex items-center justify-center h-10 w-10 text-2xl font-bold text-white bg-orange-600">
              <ImNewTab />
            </span>
          </div>
        </div>

        {/* service two */}
        <div className="w-[200px] absolute top-33 left-105 hover:scale-105 hover:shadow-2xl transition duration-300">
          <Image
            src="/assets/section 2 img 2.jpg"
            alt="Service Two"
            width={200}
            height={300}
            unoptimized
            className="w-[200px] h-[300px] object-cover rounded-lg"
          />
          <div className="flex p-2 items-center justify-between">
            <p>Advanced Classes</p>
            <span className="rounded-full flex items-center justify-center h-10 w-10 text-2xl font-bold text-white bg-orange-600">
              <ImNewTab />
            </span>
          </div>
        </div>

        {/* service three */}
        <div className="w-[200px] absolute top-23 left-170 hover:scale-105 hover:shadow-2xl transition duration-300">
          <Image
            src="/assets/section 2 img 3.jpg"
            alt="Service Three"
            width={200}
            height={300}
            unoptimized
            className="w-[200px] h-[300px] object-cover rounded-lg"
          />
          <div className="flex p-2 items-center justify-between">
            <p>Personal Training</p>
            <span className="rounded-full flex items-center justify-center h-10 w-10 text-2xl font-bold text-white bg-orange-600">
              <ImNewTab />
            </span>
          </div>
        </div>

        {/* service four */}
        <div className="w-[200px] absolute top-12 left-230 hover:scale-105 hover:shadow-2xl transition duration-300">
          <Image
            src="/assets/section 2 img 4.jpg"
            alt="Service Four"
            width={200}
            height={300}
            unoptimized
            className="w-[200px] h-[300px] object-cover rounded-lg"
          />
          <div className="flex p-2 rounded-b-lg  items-center justify-between">
            <p>Live Streaming</p>
            <span className="rounded-full flex items-center justify-center h-10 w-10 text-2xl font-bold text-white bg-orange-600">
              <ImNewTab />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
