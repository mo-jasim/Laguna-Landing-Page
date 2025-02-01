import { useState } from "react";
import {
  ZoomIn,
  ZoomOut,
  Layers,
} from "lucide-react";

const MapUi = () => {
  const [zoom, setZoom] = useState(2);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 1));
  };

  return (
    <div className="">
      {/* Navigation Bar */}
      {/* <div className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Menu className="w-6 h-6 text-gray-600" />
            <span className="font-semibold text-gray-800">MapView</span>
          </div>
          <div className="relative flex-1 max-w-xl mx-4">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search locations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <Navigation className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Layers className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div> */}

      {/* Map Container */}
      <div className="relative h-[350px] rounded-lg shadow-lg overflow-hidden">
        {/* Base Map Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 "
          style={{
            backgroundImage:
              'url("/map.jpg")',
            transform: `scale(${zoom})`,
          }}
        >
          {/* Map Overlay - Simulated Country Borders */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-40" />
        </div>

        {/* Location Labels */}
        <div className="absolute inset-0">
          <span className="absolute top-[40px] left-[300px] text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            Europe
          </span>
          <span className="absolute top-1/5 left-[500px] text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            Asia
          </span>
          <span className="absolute top-1/2 left-1/3 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            Africa
          </span>
          <span className="absolute top-[260px] right-1/18 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            Australia
          </span>
        </div>

        {/* Location Marker */}
        <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg" />
          <div className="w-8 h-8 bg-blue-500 rounded-full absolute -top-2 -left-2 opacity-20 animate-ping" />
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg text-sm w-37">
            Current Location
          </div>
        </div>

        {/* Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {/* Zoom Controls */}
          <div className="bg-white rounded-lg shadow-lg">
            <button
              onClick={handleZoomIn}
              className="p-2 hover:bg-gray-100 border-b border-gray-200 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Layer Controls */}
          <div className="bg-white rounded-lg shadow-lg p-2 cursor-pointer">
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              <Layers className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scale and Info */}
        <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
          <div className="bg-white px-3 py-1 rounded-lg shadow-lg text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-1 bg-gray-800"></div>
              <span>2000 km</span>
            </div>
          </div>
          <div className="bg-white px-3 py-1 rounded-lg shadow-lg text-sm">
            Zoom Level: {zoom.toFixed(1)}x
          </div>
        </div>

        {/* Coordinates */}
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-lg shadow-lg text-sm">
          20.25°S, 567.5°E
        </div>
      </div>
    </div>
  );
};

export default MapUi;
