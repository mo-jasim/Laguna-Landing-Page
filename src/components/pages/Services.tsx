import ServiceSlider from "../designs/ServiceSlider";

const Services = () => {
  return (
    <section className="w-full py-[50px] max-md:px-[20px] max-md:py-[20px] max-md:overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-[30px] max-md:text-[25px] font-bold tracking-wide text-center text-[#0A2724] ">
          Our Services
        </h2>

        <p className="text-[16px] mb-4 text-center text-gray-500">
          Explore the best services we offer
        </p>

        <ServiceSlider />
      </div>
    </section>
  );
};

export default Services;