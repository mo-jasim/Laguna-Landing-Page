import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import MapUi from "../designs/MapUi";

const Update = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="w-full py-[70px] max-md:px-[20px] max-md:py-[50px] bg-[#f6f6f6] overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-start items-start gap-5">
          <h2 className="text-[35px] max-md:text-[25px] font-bold tracking-wid text-start text-[#0A2724] ">
            Get special offers and more from Lagunea
          </h2>

          <p className="text-[16px] text-gray-500">
            Subscribe to our newsletter and get updates on our latest offers
          </p>

          <div className="flex items-center bg-white rounded-full p-2 pl-5 border border-[#E0E0E0] gap-10 max-md:mb-8 overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-50 max-md:w-full focus:outline-none focus:border-[#0A2724] rounded-md"
            />

            <button
              className="bg-[#0A2724] text-white rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-[#00c7b0]"
              onMouseEnter={() => setHoveredItem("btn")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Send{" "}
              <IoIosSend
                className={`text-[18px] transition-all duration-300 ${
                  hoveredItem === "btn" ? "translate-x-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <MapUi />
        </div>
      </div>
    </div>
  );
};

export default Update;
