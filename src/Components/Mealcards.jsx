import React from "react";
import { NavLink } from "react-router-dom";

const Mealcards = ({ detail }) => {
  console.log(detail);
  return (
    <div className="meals grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {!detail
        ? ""
        : detail.map((obj) => {
            return (
              <div
                className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                key={obj.idMeal}
              >
                <img
                  src={obj.strMealThumb}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{obj.strMeal}</h2>
                  <p className="text-gray-700 text-base mb-4 overflow-hidden overflow-ellipsis line-clamp-2">
                    {obj.strInstructions}
                  </p>
                  <NavLink to={`/${obj.idMeal}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      More Details
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcards;
