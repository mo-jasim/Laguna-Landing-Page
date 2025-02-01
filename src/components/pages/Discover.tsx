import {useState} from "react";
import { ArrowRight } from "lucide-react";

const Discover = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  return (
    <div className="w-full py-[70px] max-md:px-[20px] max-md:py-[50px]">
      <div className="w-full max-w-3xl mx-auto h-[300px] rounded-[32px] relative overflow-hidden bg-gradient-to-r from-[#fff5e8] via-white to-[#e8fff9] p-[2px] shadow-md">
        <div className="absolute inset-0 bg-gradient-to-l from-[#00c7b0]/20 to-[#ffe9cc]/20" />

        <div className="relative h-full w-full rounded-[30px] bg-gradient-to-r from-[#fff5e8] via-white to-[#e8fff9] p-12 flex flex-col items-center justify-center max-md:items-start">

          <h1 className="text-4xl max-md:text-[25px] font-medium mb-2">
            Discover{" "}
            <span className="text-[#00c7b0] font-semibold">Mauritius</span> Like
          </h1>
          <h2 className="text-4xl max-md:text-[25px] font-medium mb-6">Never Before</h2>

          <button className="bg-[#fff5e8] border-1 border-yellow-400 text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#ffe9cc] transition-colors cursor-pointer"
          onMouseEnter={() => setHoveredItem("button")}
          onMouseLeave={() => setHoveredItem(null)}
          >
            Start Your Journey <ArrowRight className={`w-4 h-4 transition-all duration-300 ${hoveredItem === 'button' ? "translate-x-1.5" : " "}`} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default Discover;