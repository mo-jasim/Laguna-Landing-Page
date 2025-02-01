import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";

const AboutUs = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="w-full py-[60px] max-md:px-[20px] max-md:py-[50px] bg-[#0A2724]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-2">
        <h2 className="text-[45px] max-md:text-[25px] font-[600] tracking-wide leading-12 text-center text-white ">
          About <br />{" "}
          <span className="font-[700] text-[50px] max-md:text-[35px]">
            Lagunea
          </span>
        </h2>

        <p className="text-[16px] my-4 text-center text-white w-full md:w-[60%] mx-auto">
          in the heart of the vibrant cities sunset over the bustling streets,
          creating a golden hue you on the lively cafés and subs magical
          atmosphere that captivates all who wonder its parts
        </p>

        <button
          className="flex items-center gap-2 p-2 px-6 bg-[#36C6B7] rounded-full text-white transition-all duration-300 hover:bg-[#40E0D0] cursor-pointer border-1 border-[#ffffff7e]"
          onMouseEnter={() => setHoveredItem("button")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          Know More{" "}
          <CiLocationArrow1
            className={`transition-all duration-300 ${
              hoveredItem === "button" ? "translate-x-1.5" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default AboutUs;