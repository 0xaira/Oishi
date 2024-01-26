import { IMG_CDN_URL } from "../Utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="flex flex-wrap">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img
          className="w-full"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            {cuisines.join(", ")} | {areaName}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <i className="fa-solid fa-star"></i> {avgRatingString}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {sla?.lastMileTravelString ?? "2.0 km"}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {costForTwo ?? "₹200 for two"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
