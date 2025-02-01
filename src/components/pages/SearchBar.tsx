import { FaMapMarked } from "react-icons/fa";
import { LuCalendarSearch } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <section className="relative z-10 w-full max-md:py-8 max-md:px-4">
      <div className="w-full max-w-screen-lg mx-auto bg-white text-black p-5 px-8 rounded-full max-md:rounded-2xl shadow-md flex max-md:flex-col justify-between gap-4 max-md:gap-6 -mt-[40px] max-md:-mt-0 max-md:border-1 max-md:border-[#ededed]">
        {/* Location */}
        <div className="flex items-center space-x-3 border-r-1 border-[#E0E0E0] max-md:border-none">
          <FaMapMarked className="text-3xl" />

          <div className="flex flex-col w-50">
            <input
              type="text"
              placeholder="Location"
              className="w-full outline-none border-none text-[16px] font-[500] placeholder:text-black"
            />

            <label htmlFor="Location" className="text-[14px] text-[#868686] cursor-pointer">
              Choose Your Destination
            </label>
          </div>
        </div>

        {/* Check in & Checkout */}
        <div className="flex items-center space-x-2 border-r-1 border-[#E0E0E0] max-md:border-none ml-2 max-md:ml-0">

          <div className="flex items-center space-x-3">
            <LuCalendarSearch className="text-3xl" />

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Check In"
                className="w-full outline-none border-none text-[16px] font-[500] placeholder:text-black"
              />

              <label htmlFor="Check In" className="text-[14px] text-[#868686] cursor-pointer">
                Tomorrow
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-3">
            <LuCalendarSearch className="text-3xl" />

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Check Out"
                className="w-full outline-none border-none text-[16px] font-[500] placeholder:text-black"
              />

              <label htmlFor="Check Out" className="text-[14px] text-[#868686] cursor-pointer">
                {"-----/---/-----"}
              </label>
            </div>
          </div>

        </div>

        {/* Guest & Search */}
        <div className="flex items-center space-x-3 ml-2 max-md:ml-0">
          <div className="flex items-center justify-between space-x-3">
            <FiUsers className="text-3xl" />

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Guest"
                className="w-full outline-none border-none text-[16px] font-[500] placeholder:text-black"
              />

              <label htmlFor="Guest" className="text-[14px] text-[#868686] cursor-pointer">
                1 Guest, 1 Room
              </label>
            </div>
          </div>

          <div>
            <button className="bg-[#36C6B7] text-white py-3 px-6 rounded-full flex items-center space-x-2 cursor-pointer">
              <IoSearchOutline className="text-2xl" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
