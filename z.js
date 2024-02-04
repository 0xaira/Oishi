import React from 'react';
import { IMG_CDN_URL } from '../Utils/constants';

const ItemList = (props) => {
  const { items } = props;


  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item) => (
        <div key={item.card.info.id} className="bg-white p-4 rounded-md shadow-md">
          <div className="flex justify-between items-center mb-2">
            <img
              src={IMG_CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div >
              <span className="text-lg font-semibold w-full">
                {item.card.info.name.length > 20
                  ? item.card.info.name.substring(0, 20) + '...'
                  : item.card.info.name}
              </span>
              
              {/* <p className="text-gray-600">{item.card.info.description}</p> */}
            </div>
            <span className="text-green-500">₹{item.card.info.price / 100}</span>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none">
            ADD +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
