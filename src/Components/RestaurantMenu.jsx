import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import {
  MENU_API_URL,
  MENU_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  IMG_CDN_URL,
} from '../Utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(MENU_API_URL + resId);
      const json = await response.json();

      const restaurantData =
        json?.data?.cards?.map((x) => x.card)?.find(
          (x) => x && x.card['@type'] === RESTAURANT_TYPE_KEY
        )?.card?.info || null;

      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData =
        json?.data?.cards.find((x) => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.map((x) => x.card?.card)
          ?.filter((x) => x['@type'] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary flex items-center justify-between">
        <img
          className="restaurant-img w-32 h-32 rounded"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details ml-4">
          <h2 className="restaurant-title text-2xl font-bold mb-1">{restaurant?.name}</h2>
          <p className="restaurant-tags text-gray-500">{restaurant?.cuisines?.join(', ')}</p>
          <div className="restaurant-details flex items-center mt-2">
            <div
              className={`restaurant-rating rounded-full px-2 ${
                restaurant?.avgRating < 4
                  ? 'bg-red-300'
                  : restaurant?.avgRating === '--'
                  ? 'bg-white text-black'
                  : 'bg-green-500 text-white'
              }`}
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash mx-2">|</div>
            <div className="text-gray-600">{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash mx-2">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content mt-4">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title text-xl font-bold">Recommended</h3>
            <p className="menu-count text-gray-500">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list mt-2">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title text-lg font-semibold">{item?.name}</h3>
                  <p className="item-cost text-green-500">
                    {item?.price > 0
                      ? new Intl.NumberFormat('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                        }).format(item?.price / 100)
                      : ' '}
                  </p>
                  <p className="item-desc text-gray-500">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper ml-4">
                  {item?.imageId && (
                    <img
                      className="menu-item-img w-20 h-20 rounded"
                      src={MENU_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn bg-green-500 text-white px-2 py-1 rounded">
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
