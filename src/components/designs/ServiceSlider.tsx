import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CiStopwatch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const tabs = [
  "Excursions & Adventures",
  "Luxury accommodations",
  "Transport services",
  "Groups Tours & Corporate events",
  "Honeymoon packages",
  "Local explore",
];

type ContentType = {
  [key: string]: {
    title: string;
    items: {
      id: number;
      title: string;
      image: string;
      rating: number;
      duration: string;
      price: number;
      description: string;
    }[];
  };
};

const content: ContentType = {
  "Excursions & Adventures": {
    title: "SNORKELING",
    items: [
      {
        id: 1,
        title: "Snorkeling Mauritius",
        image:
          "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&q=80",
        rating: 4.5,
        duration: "6 Hours",
        price: 55,
        description:
          "Discover the vibrant marine life in crystal clear waters.",
      },
      {
        id: 2,
        title: "Blue Bay Marine Park",
        image:
          "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
        rating: 4.8,
        duration: "6 Hours",
        price: 65,
        description:
          "Explore one of the most beautiful marine parks in Mauritius.",
      },
      {
        id: 3,
        title: "Turtle Bay Adventure",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        rating: 4.7,
        duration: "6 Hours",
        price: 75,
        description:
          "Swim alongside gentle sea turtles in their natural habitat.",
      },
      {
        id: 4,
        title: "Coral Garden Tour",
        image: "/img5.jpg",
        rating: 4.6,
        duration: "6 Hours",
        price: 85,
        description: "Discover the stunning coral gardens of the Indian Ocean.",
      },
    ],
  },

  "Luxury accommodations": {
    title: "BEACHFRONT RESORTS",
    items: [
      {
        id: 1,
        title: "Ocean View Villa",
        image: "/img6.jpg",
        rating: 4.9,
        duration: "Per night",
        price: 450,
        description: "Luxurious beachfront villa with private infinity pool.",
      },
      {
        id: 2,
        title: "Royal Palm Suite",
        image:
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
        rating: 4.8,
        duration: "Per night",
        price: 380,
        description:
          "Elegant suite with panoramic ocean views and butler service.",
      },
      {
        id: 3,
        title: "Tropical Paradise Resort",
        image:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
        rating: 4.7,
        duration: "Per night",
        price: 320,
        description: "Five-star resort with world-class amenities and spa.",
      },
      {
        id: 4,
        title: "Lagoon Water Villa",
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        rating: 4.9,
        duration: "Per night",
        price: 520,
        description:
          "Overwater villa with direct lagoon access and glass floors.",
      },
    ],
  },

  "Transport services": {
    title: "PREMIUM TRANSFERS",
    items: [
      {
        id: 1,
        title: "Luxury Airport Transfer",
        image: "/img7.jpg",
        rating: 4.8,
        duration: "One way",
        price: 80,
        description: "Premium airport transfers in luxury vehicles.",
      },
      {
        id: 2,
        title: "Private Helicopter",
        image:
          "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
        rating: 4.9,
        duration: "30 mins",
        price: 450,
        description: "Scenic helicopter transfers with breathtaking views.",
      },
      {
        id: 3,
        title: "Luxury Yacht Charter",
        image:
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
        rating: 4.7,
        duration: "Per day",
        price: 1200,
        description: "Private yacht transfers between islands.",
      },
      {
        id: 4,
        title: "Chauffeur Service",
        image:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
        rating: 4.8,
        duration: "Per day",
        price: 200,
        description: "Dedicated chauffeur service in luxury vehicles.",
      },
    ],
  },

  "Groups Tours & Corporate events": {
    title: "GROUP EXPERIENCES",
    items: [
      {
        id: 1,
        title: "Team Building Retreat",
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
        rating: 4.7,
        duration: "2 Days",
        price: 250,
        description: "Engaging team building activities in paradise settings.",
      },
      {
        id: 2,
        title: "Corporate Conference",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
        rating: 4.8,
        duration: "Per day",
        price: 180,
        description: "State-of-the-art conference facilities with ocean views.",
      },
      {
        id: 3,
        title: "Group Island Tour",
        image:
          "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
        rating: 4.6,
        duration: "8 Hours",
        price: 120,
        description: "Customized island tours for large groups.",
      },
      {
        id: 4,
        title: "Beach Olympics",
        image:
          "https://images.unsplash.com/photo-1526485856375-9110812fbf35?w=800&q=80",
        rating: 4.9,
        duration: "4 Hours",
        price: 90,
        description: "Fun beach games and activities for corporate groups.",
      },
    ],
  },

  "Honeymoon packages": {
    title: "ROMANTIC GETAWAYS",
    items: [
      {
        id: 1,
        title: "Paradise Romance",
        image:
          "https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?w=800&q=80",
        rating: 4.9,
        duration: "7 Days",
        price: 2800,
        description: "Ultimate romantic getaway with private experiences.",
      },
      {
        id: 2,
        title: "Sunset Cruise Package",
        image:
          "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
        rating: 4.8,
        duration: "5 Days",
        price: 1900,
        description: "Romantic sunset cruises and candlelit dinners.",
      },
      {
        id: 3,
        title: "Spa Retreat",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
        rating: 4.7,
        duration: "4 Days",
        price: 1500,
        description: "Couples spa treatments and wellness experiences.",
      },
      {
        id: 4,
        title: "Adventure Romance",
        image:
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
        rating: 4.8,
        duration: "6 Days",
        price: 2200,
        description: "Perfect blend of romance and adventure activities.",
      },
    ],
  },

  "Local explore": {
    title: "LOCAL EXPERIENCES",
    items: [
      {
        id: 1,
        title: "Cultural Village Tour",
        image:
          "https://images.unsplash.com/photo-1523539693385-e5e891eb4465?w=800&q=80",
        rating: 4.7,
        duration: "5 Hours",
        price: 65,
        description: "Immersive tour of traditional villages and customs.",
      },
      {
        id: 2,
        title: "Food Trail Adventure",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        rating: 4.8,
        duration: "4 Hours",
        price: 85,
        description: "Taste local delicacies and street food favorites.",
      },
      {
        id: 3,
        title: "Artisan Workshop",
        image:
          "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
        rating: 4.6,
        duration: "3 Hours",
        price: 45,
        description: "Learn traditional crafts from local artisans.",
      },
      {
        id: 4,
        title: "Market Experience",
        image:
          "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80",
        rating: 4.7,
        duration: "4 Hours",
        price: 40,
        description: "Guided tour of local markets and bazaars.",
      },
    ],
  },
};

const ServiceSlider = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeContent = content[tabs[activeTab]];

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIndex((prev) =>
      prev === 0 ? activeContent.items.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIndex((prev) =>
      prev === activeContent.items.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTabChange = (index: number) => {
    setIsAnimating(true);
    setActiveTab(index);
    setStartIndex(0);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="">
      <div className="mb-5 max-md:mb-4 overflow-x-auto -mx-8 px-4 md:mx-0 md:px-0">
        <div className="flex space-x-4 min-w-max p-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer ${
                activeTab === index
                  ? "bg-[#0A2724] text-white shadow-lg"
                  : "bg-[#d5f8f4] text-gray-600 hover:bg-[#36C6B7] hover:text-white shadow-md"
              }`}
              onClick={() => handleTabChange(index)}
              disabled={isAnimating}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="relative max-md:mt-8">
        <h2 className="text-2xl font-bold mb-6 transition-opacity duration-300 ease-in-out ml-3 flex justify-start gap-4 items-center">
          {activeContent.title}{" "}
          <hr className="w-[72%] max-w-auto text-[#c2c2c2] max-md:hidden" />
        </h2>

        <div className="relative">
          <div className="overflow-hidden pb-10">
            <div
              className={`flex transition-all duration-300 ease-in-out ${
                isAnimating ? "opacity-50" : "opacity-100"
              }`}
              style={{
                transform: `translateX(-${
                  startIndex * (100 / getVisibleCards())
                }%)`,
              }}
            >
              {activeContent.items.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-3"
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border-1 border-[#ededed] cursor-pointer group"
                    onMouseEnter={() => setHoveredItem(item.image)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      />
                      
                      <FaHeart
                        className={`absolute top-2 text-lg right-2 transition-all duration-300 ease-in-out ${
                          hoveredItem === item.image ? "opacity-100 text-white" : "opacity-0"
                        }`}
                      />
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>

                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < Math.floor(item.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-3">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between">
                          <div className="text-[#36C6B7] text-[18px] font-[600] ">
                            From ${item.price}
                            <span className="text-xs align-top">*</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-end space-x-1">
                            <span className="text-black text-sm font-medium">
                              {item.duration}
                            </span>

                            <span className="flex items-center space-x-1 text-gray-500">
                              {" "}
                              <CiStopwatch className="text-xl mr-1 " /> Duration
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevious}
            disabled={startIndex === 0 || isAnimating}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              startIndex === 0 || isAnimating
                ? "text-gray-300 cursor-not-allowed opacity-50"
                : "text-gray-600 hover:text-blue-600 hover:scale-105 cursor-pointer"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={
              startIndex >= activeContent.items.length - getVisibleCards() ||
              isAnimating
            }
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              startIndex >= activeContent.items.length - getVisibleCards() ||
              isAnimating
                ? "text-gray-300 cursor-not-allowed opacity-50"
                : "text-gray-600 hover:text-blue-600 hover:scale-105 cursor-pointer"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
