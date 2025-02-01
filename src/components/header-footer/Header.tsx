import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { PiCurrencyInrBold } from "react-icons/pi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="w-full flex flex-col bg-white text-black">
      {/* Top Header */}
      <div className="max-md:hidden w-full max-w-screen-xl mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <img src="/nav-logo.png" alt="logo" className="cursor-pointer" />

        {/* Search container */}
        <div className="p-2 bg-[#FFFCF5] border-1 border-[#e9e9e9] rounded-3xl flex items-center gap-4 pl-4">
          <div className="flex items-center border-r-1 border-[#bdbdbd] pr-2 gap-1">
            <h4 className="text-black text-[12px]">All</h4>
            <IoIosArrowDown className="text-[#000000] text-[12px] cursor-pointer" />
          </div>

          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search activities or locations.."
              className="w-65 outline-none text-[14px]"
            />
            <IoIosSearch className="text-white text-[30px] bg-[#0A2724] p-[6px] rounded-full cursor-pointer" />
          </div>
        </div>

        {/* Contact container */}
        <div className="flex items-center gap-6">
          <div className="flex item-center gap-1 cursor-pointer">
            <IoLocationSharp className="text-black text-[18px] " />
            <h4 className="text-black text-[12px] font-medium ">Location:</h4>
            <h4 className="text-[#999] text-[12px] font-medium ">Mauritius</h4>
          </div>

          <div className="flex item-center gap-1 cursor-pointer">
            <PiCurrencyInrBold className="text-black text-[18px] " />
            <h4 className="text-black text-[12px] font-medium ">Currency:</h4>
            <h4 className="text-[#999] text-[12px] font-medium ">MUR</h4>
          </div>

          <div className="flex item-center gap-1 cursor-pointer">
            <LiaFlagUsaSolid className="text-[#3d59e3] text-[18px] " />
            <h4 className="text-black text-[12px] font-medium ">Language:</h4>
            <h4 className="text-[#999] text-[12px] font-medium ">English</h4>
          </div>

          <div className="flex item-center gap-2">
            <FaCartFlatbedSuitcase className="text-black text-[18px] cursor-pointer" />
            <h4 className="text-black text-[12px] font-medium border-l-1 border-[#bdbdbd] pl-2">
              Sign in
            </h4>
            <FaRegCircleUser className="text-black text-[18px] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="max-md:hidden bg-[#0A2724] flex justify-between items-center py-4">
        <div className="max-w-screen-xl mx-auto">
          <ul className="flex items-center justify-between gap-[26px]">
            <li className="text-white text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer">
              Home
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("excursions")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Excursions{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "excursions" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("accommodations")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Accommodations{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "accommodations" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("Transportation")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Transportation{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "Transportation" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("Group")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Group & Corporate{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "Group" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("Honeymoon")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Honeymoon & Weddings{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "Honeymoon" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("Local")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Local Cuisine{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "Local" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li className="text-white text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer">
              About Us
            </li>
            <li className="text-white text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer">
              Blogs
            </li>
            <li className="text-white text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="relative z-50 md:hidden max-md:flex justify-between items-center py-4 px-6">
        <img
          src="/nav-logo.png"
          alt="logo"
          className=""
          onClick={() => {
            setIsMenuOpen(false);
          }}
        />

        <div className="flex items-center gap-4">
          <IoIosSearch className="text-black text-[30px] cursor-pointer" />
          <FaCartFlatbedSuitcase className="text-black text-[30px] cursor-pointer" />

          {/* Hamburger */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setActiveDropdown(null);
            }}
          >
            <div className="relative w-6 h-8">
              <div
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <CgMenuRight className="text-black text-[30px] cursor-pointer" />
              </div>

              <div
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                }`}
              >
                <IoMdClose className="text-black text-[30px] cursor-pointer" />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={`${
            isMenuOpen ? "max-h-[55rem] opacity-100" : "max-h-0 opacity-0"
          } absolute z-50 w-[100vw] bg-[#0A2724] top-[5.5rem] left-0 right-0 md:hidden overflow-hidden transition-all duration-300 ease-in-out p-8 border-b border-[#4d4d4d]`}
        >
          <ul className="flex flex-col items-start justify-between gap-[26px]">
            <li
              className="text-white text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Home
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("excursions")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Excursions{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "excursions" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("accommodations")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Accommodations{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "accommodations" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("Transportation")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Transportation{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "Transportation" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("Group")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Group & Corporate{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "Group" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("Honeymoon")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Honeymoon & Weddings{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "Honeymoon" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white flex items-center gap-1 text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onMouseEnter={() => setHoveredItem("Local")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Local Cuisine{" "}
              <IoIosArrowDown
                className={`text-[#fff] text-[12px] transition-all duration-300 ${
                  hoveredItem === "Local" ? "rotate-180" : ""
                }`}
              />
            </li>
            <li
              className="text-white text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              About Us
            </li>
            <li
              className="text-white text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Blogs
            </li>
            <li
              className="text-white text-[14px] font-medium transition-all duration-300 hover:text-[#c3c3c3] cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </li>

            <button
              className="bg-[#ffffff24] text-white p-4 rounded-full flex items-center gap-2"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <FaRegCircleUser className="text-white text-[20px] " />
              Login / Signup
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;