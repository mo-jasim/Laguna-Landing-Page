import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const linkedin = () =>{
    window.open('https://www.linkedin.com/in/mohammad-jasim23/', '_blank');
  } 

  return (
    <footer className="w-full bg-[#0A2724] text-white py-[50px] max-md:px-[20px]">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <img src="/nav-logo.png" alt="logo" className="w-[100px]" />
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              nunc et turpis.
            </p>

            {/* social icons */}
            <div className="flex items-center gap-10">
              <FaInstagram className="text-[20px] transition-all duration-300 hover:scale-[1.2] cursor-pointer " />
              <FaFacebook className="text-[20px] transition-all duration-300 hover:scale-[1.2] cursor-pointer " />
              <BsTwitterX className="text-[20px] transition-all duration-300 hover:scale-[1.2] cursor-pointer " />
              <FaPinterest className="text-[20px] transition-all duration-300 hover:scale-[1.2] cursor-pointer " />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] font-bold tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Home</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">About Us</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Contact Us</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Blogs</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Privacy Policy</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Terms & Conditions</li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] font-bold tracking-wider">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Excursions</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Accommodations</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Transportation</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Group & Corporate</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Honeymoon & Wedding</li>
              <li className="text-[15px] cursor-pointer border-b border-[#0a2724] hover:border-b-1 hover:border-[#ffff]">Local Cuisine</li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] font-bold tracking-wider">Language</h3>
            <div className="w-full flex items-center justify-between bg-white transition-all duration-300 hover:bg-[#40E0D0] text-black hover:text-white p-2 rounded-xl px-4 mb-4 cursor-pointer">
              <h4 className="text-[14px]">English (United States)</h4>
              <IoIosArrowDown className="text-[20px] cursor-pointer" />
            </div>

            <h3 className="text-[18px] font-bold tracking-wider">Currency</h3>
            <div className="w-full flex items-center justify-between bg-white transition-all duration-300 hover:bg-[#40E0D0] text-black hover:text-white p-2 rounded-xl px-4 cursor-pointer">
              <h4 className="text-[14px]">United States USD ($)</h4>
              <IoIosArrowDown className="text-[20px] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex max-md:flex-col max-md:items-center max-md:gap-4 items-end justify-between mt-10 border-t border-[#ffffff58]">
          <p className="text-center text-[15px] mt-10">
            © 2021 All Rights Reserved - Designed by{" "}
            <span className="text-[#40E0D0] cursor-pointer" onClick={linkedin}>Jasim Ansari</span>
          </p>

          <img src="/payments.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
