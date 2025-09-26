"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faqs = () => {
  // First FAQ open by default
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the best time to work out at the gym?",
      answer:
        "The best time depends on your schedule. Mornings boost energy and metabolism, while evenings suit strength training.",
    },
    {
      question: "Do I need a personal trainer as a beginner?",
      answer:
        "Not necessary, but a trainer can help you learn proper form, avoid injuries, and create a tailored plan.",
    },
    {
      question: "How often should I go to the gym weekly?",
      answer:
        "For beginners, 3–4 days a week is enough. As you progress, 4–6 days can be effective depending on recovery.",
    },
    {
      question: "What should I eat before and after a workout?",
      answer:
        "Before: light carbs + protein (banana, oats). After: protein + carbs (chicken, rice, or a protein shake).",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 px-4 sm:px-8 md:px-16 bg-[radial-gradient(circle,white_40%,#FF8080_200%)]">
      
      {/* Left Div */}
      <div className="flex flex-col justify-between">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center md:text-left">
          Frequently Asked <span className="text-orange-600">Questions</span>?
        </h2>

        {/* Profile Circles + Text */}
        <div className="border rounded-lg p-5 bg-white space-y-4 shadow-lg hover:shadow-xl transition-shadow shadow-gray-800 duration-300">
          <div className="flex justify-center md:justify-start gap-3">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-200 rounded-full overflow-hidden shadow-md"
              >
                <img
                  src="/assets/profile img one.jpg"
                  
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center md:text-left space-y-2">
            <h4 className="text-lg font-semibold">Still Have a Question?</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our team is always ready to help you achieve your fitness goals.
              <br />
              If you didn’t find your answer,{" "}
              <a
                href="#contact"
                className="text-blue-600 font-semibold hover:underline"
              >
                Contact Us
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Right Div (FAQs Accordion) */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg bg-white transition-shadow duration-300 ${
              openIndex === index
                ? "shadow-lg hover:shadow-xl"
                : "shadow-md hover:shadow-lg"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-800"
            >
              {faq.question}
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex === index ? (
                  <FaMinus className="text-red-500" />
                ) : (
                  <FaPlus className="text-orange-600" />
                )}
              </span>
            </button>

            <div
              className={`px-4 text-gray-600 transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              <p className="text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
