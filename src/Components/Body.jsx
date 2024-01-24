import { restaurantList } from "../Utils/mockData.jsx"
import RestaurantCard from "./RestaurantCard.jsx";
import { useEffect, useState } from "react";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  useEffect(() => {
    fetchData();
  }
    , []);

  const fetchData = async () => {
    const data = await fetch("https://thingproxy.freeboard.io/fetch/" + "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.447523597754362&lng=73.85565485805273&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants ||
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
  };


  return (
    <main>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        onClick={() => {
          const filteredList = restaurantList.filter((restaurant) => {
            return restaurant.data.avgRating >= 4.5;
          });
          setListOfRestaurants(filteredList);
        }}
      >
        TOP RATED RESTAURANTS
      </button>

      <div className="flex flex-wrap -mx-4">
      {listOfRestaurants.map((item) => {
  const restaurant = item?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
  return (
    restaurant &&
    restaurant.map((rest) => (
      rest?.info?.id && ( // Add this check to ensure 'id' exists
        <RestaurantCard
          key={rest.info.id}
          {...rest.info}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
        />
      )
    ))
  );
})}
      </div>
    </main>
  );
};

export default Body;