import {IMG_CDN_URL} from "../../src/Utils/constants.jsx"

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="flex ">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{area}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <span className="text-gray-900 text-lg">{avgRating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-yellow-500 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-gray-700 text-base">{lastMileTravelString}</p>
          <p className="text-gray-700 text-base">{costForTwoString}</p>
        </div>
      </div>
    </div>
    </div>
  );
};


  export default RestaurantCard;