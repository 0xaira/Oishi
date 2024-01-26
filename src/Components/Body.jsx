import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../Utils/constants";

function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [topRestaurants, setTopRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container p-4 bg-gray-100 rounded-lg shadow-md mb-4 ml-[600px] ">
        <input
          type="text"
          className="search-input border border-gray-300 p-2 rounded-md w-[500px]"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn bg-orange-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>

        <button
          className="search-btn bg-orange-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => {
            const topRes = allRestaurants.filter((res) => res.info.avgRating > 4.5);
            console.log(topRes);
            setTopRestaurants(topRes);
            // Update filteredRestaurants state as well
            setFilteredRestaurants(topRes);
          }}
        >
          Top Restaurants
        </button>


      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap ml-[100px]">
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
