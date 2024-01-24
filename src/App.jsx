import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { restaurantList } from "../src/Utils/mockData.jsx"
import RestaurantCard from "./Components/RestaurantCard.jsx";
import { useState } from "react";
import ImageSlider from "./Components/imageSLider.jsx"; 

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  return (
    <main>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      onClick={() => {
        const filteredList= restaurantList.filter((restaurant) => {
          return restaurant.data.avgRating >= 4.5;
        });
        setListOfRestaurants(filteredList);
      }}
      >
        TOP RATED RESTAURANTS
      </button>

      <div className="flex flex-wrap -mx-4">
        {listOfRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8" />;
        })}
      </div>
    </main>
  );
};
const App = () => {
  return (
    <>
      <Header />
      <ImageSlider/>
      <Body />
      <Footer />
    </>
  );
};

export default App;

