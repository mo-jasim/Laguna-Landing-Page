
const destinations = [
  {
    name: "Taj Mahal",
    image: "/img8.jpg",
  },
  {
    name: "New York",
    image: "/img9.jpg",
  },
  {
    name: "London",
    image: "/img10.jpg",
  },
  {
    name: "Tokyo",
    image: "/img11.jpg",
  },
  {
    name: "Paris",
    image: "/img12.jpg",
  },
  {
    name: "Dubai",
    image: "/img13.jpg",
  },
  {
    name: "Sydney",
    image: "/img14.jpg",
  },
  {
    name: "Rome",
    image: "/img15.jpg",
  },
];

const Destinations = () => {
  return (
    <div className="w-full pb-[70px] max-md:px-[20px] max-md:pb-[20px]">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-[30px] max-md:text-[25px] font-bold tracking-wide text-center text-[#0A2724] mb-8">
          Top Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl group"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-[250px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b to-[#000000c3] flex items-end justify-center py-6">
                <h3 className="text-white text-[20px] font-bold">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
