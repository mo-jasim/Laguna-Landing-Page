import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images: string[] = [
  "/img1.jpg",
  "/img2.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
];

const HeroImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const goToPrevious = (): void => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (): void => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getNextIndex = (index: number): number => {
    return index === images.length - 1 ? 0 : index + 1;
  };

  const getStaticRotation = (index: number, isBackground: boolean = false): number => {
    const rotations = [-12, 8, -5, 15, -10, 5];
    return rotations[index % rotations.length] + (isBackground ? 15 : 0);
  };
  
  return (
    <div className="relative max-md:hidden">
      <div className="relative overflow-hidden rounded-2xl p-4 sm:p-8 md:p-12">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center"
            >
              {/* Background Image */}
              <div className="absolute w-[90%] sm:w-[55%] md:w-[50%] aspect-square opacity-60">
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden transform transition-all duration-1000 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                  style={{
                    transform: `rotate(${
                      getStaticRotation(getNextIndex(index), true) +
                      direction * (index === currentIndex ? 360 : 0)
                    }deg) scale(0.85)`,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <img
                    src={images[getNextIndex(index)]}
                    alt={`Background ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-1000 blur-[1px]"
                  />
                </div>
              </div>

              {/* Foreground Image */}
              <div className="relative w-[80%] sm:w-[70%] md:w-[65%] aspect-square z-10">
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden transform transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  style={{
                    transform: `rotate(${
                      getStaticRotation(index) +
                      direction * (index === currentIndex ? 360 : 0)
                    }deg)`,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    style={{
                      transform: `scale(${index === currentIndex ? 1.05 : 1})`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-[50px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors p-2 sm:p-3 rounded-full backdrop-blur-sm hover:scale-110 transition-transform duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-[50px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors p-2 sm:p-3 rounded-full backdrop-blur-sm hover:scale-110 transition-transform duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
    </div>
  );
};

export default HeroImgSlider;
