import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import background from "/img3.jpg";
import HeroImgSlider from "../designs/HeroImgSlider";

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section
      className="w-full py-[100px] max-md:px-[20px] max-md:py-[50px] relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay div */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Div */}
      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Right Container */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-[70px] max-md:text-[35px] font-bold tracking-wider text-white">Lagunea</h2>

          <p className="text-[25px] max-md:text-[20px] font-medium text-white">
            Dive Into Paradise, Explore Mauritius
          </p>

          <p className="text-[16px] mb-4 text-white">
            {" "}
            in the heart of the vibrant cities sunset over the bustling streets,
            creating a golden hue you on the lively cafés and subs magical
            atmosphere that captivates all who wonder its parts
          </p>

          <button
            className="text-[16px] font-medium flex items-center gap-2 bg-white/5 backdrop-blur-xl p-3 px-6 border border-amber-400 rounded-full cursor-pointer transition-all duration-300 hover:-translate-1.5 text-white"
            onMouseEnter={() => setHoveredItem("Book")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Book your experience now{" "}
            <CiLocationArrow1
              className={`transition-all duration-300 ${
                hoveredItem === "Book" ? "translate-x-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Left Img Container */}
          <HeroImgSlider />
      </div>
    </section>
  );
};

export default Home;