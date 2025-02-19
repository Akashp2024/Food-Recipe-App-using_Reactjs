import React from "react";
import { NavLink } from "react-router-dom";

const Mealcards = ({ detail }) => {
  return (
    <div className="meals grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {!detail
        ? ""
        : detail.map((obj) => {
            return (
              <NavLink
                to={`/${obj.idMeal}`}
                key={obj.idMeal}
                state={{ data: detail }}
              >
                <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                  <img
                    src={obj.strMealThumb}
                    alt="food"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {obj.strMeal}
                    </h3>
                  </div>
                </div>
              </NavLink>
            );
          })}
    </div>
  );
};

export default Mealcards;
// In the above code snippet, we have created a new component named Mealcards. This component is used to display the meal cards on the main page. It receives the meal details as props and maps over them to display each meal card. Each meal card is a clickable link that redirects to the Mealinfo component with the meal id as a parameter. The state containing the meal data is also passed along with the link to maintain the state between components.
