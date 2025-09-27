"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuLogIn } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between lg:justify-around items-center h-[60px] border-b bg-transparent z-50 absolute top-0 left-0 w-full px-4">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link href="/" className="flex items-center gap-1">
            <Image
              className="w-[35px] sm:w-[40px]"
              src={"/assets/logo.png"}
              width={100}
              height={100}
              alt="logo"
            />
            <span className="font-bold text-sm sm:text-base">Fitness Zone</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-around items-center w-auto md:w-[500px] gap-6">
          <Link href={"/"} className="cursor-pointer font-medium text-[#FF8080]">
            Home
          </Link>
          <Link href={"#whychooseus"} className="cursor-pointer font-medium">
            Why Choose US
          </Link>
          <Link href={"#testimonials"} className="cursor-pointer font-medium">
            Testimonials
          </Link>
          <Link href={"#trainers"} className="cursor-pointer font-medium">
            Trainers
          </Link>
          <Link href={"#blog"} className="cursor-pointer font-medium">
            Blog
          </Link>
        </nav>

        {/* Right Side: Login + Burger */}
        <div className="flex items-center gap-4">
          {/* Login button (always visible) */}
          <button className="border rounded font-medium px-3 text-[#FF8080] cursor-pointer py-1 flex items-center gap-1">
            <Link href={"/"} className="flex items-center gap-1">
              <LuLogIn />
              <span className="underline">Login</span>
            </Link>
          </button>

          {/* Burger Menu Button (only mobile + tablet) */}
          <button
            className="md:hidden text-2xl text-[#FF8080]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-5 md:hidden">
            <Link href={"/"} className="cursor-pointer font-medium text-[#FF8080]" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href={"#whychooseus"} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
              Why Choose US
            </Link>
            <Link href={"#testimonials"} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <Link href={"#trainers"} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
              Trainers
            </Link>
            <Link href={"#blog"} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
