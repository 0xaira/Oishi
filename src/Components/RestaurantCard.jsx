import { IMG_CDN_URL } from "../Utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  aggregatedDiscountInfoV3,
  avgRatingString,
  deliveryTime,
}) => {
  return (
    <div className="w-full sm:w-[300px] lg:w-[220px] md:w-[220px] group rounded-xl hover:scale-95 transition-transform ease-in cursor-pointer mx-auto my-4">
      <div className="relative">
        <img
          className="w-full h-[210px] lg:h-[140px] md:h-[140px] rounded-xl"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparen opacity-55 rounded-xl">
          <div className="absolute bottom-0 left-0 right-0 text-white text-center py-2 px-2">
            <p className="text-start text-lg font-black leading-6 text-white">
              {aggregatedDiscountInfoV3?.header ?? ''} {aggregatedDiscountInfoV3?.subHeader ?? ''}
            </p>
          </div>
        </div>
      </div>

      <p className="p-3 py-1 text-lg font-bold leading-6 tracking-[-0.3px] text-[#02060CBF]">
        {name.length > 20 ? `${name.substr(0, 15)}...` : name}
      </p>

      <div className="px-3 py-1 flex items-center gap-1 text-[#02060CBF] font-bold">
        {/* Your existing SVG and rating code */}
      </div>

      <p className="px-3 py-1 text-[#02060C99] text-base leading-4 tracking-[-0.3px]">
        {cuisines.length > 3
          ? `${cuisines.slice(0, 2).join(", ")}...`
          : cuisines.join(", ")}
      </p>
      <p className="px-3 pb-2 text-[#02060C99] text-base leading-4 tracking-[-0.3px]">
        {areaName}
      </p>
    </div>
  );
};

export default RestaurantCard;
