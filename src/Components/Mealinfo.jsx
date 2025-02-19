import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Mealinfo = () => {
  const { mealid } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [info, setinfo] = useState("");

  useEffect(() => {
    const getinfo = async () => {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const jsondata = await get.json();
      setinfo(jsondata.meals[0]);
    };
    if (mealid) {
      getinfo();
    }
  }, [mealid]);

  const handleBackClick = () => {
    navigate("/", {
      state: {
        data: location.state?.data || [],
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      {!info ? (
        "Data not found"
      ) : (
        <div className="maincontainer bg-gray-800 p-6 rounded-lg border border-gray-700 relative">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={info.strMealThumb}
              alt={info.strMeal}
              className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="md:ml-4">
              <h1 className="text-3xl font-bold text-white mb-4">
                Recipe Details
              </h1>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out mb-4">
                {info.strMeal}
              </button>
              <h3 className="text-xl font-semibold text-white mb-2">
                Instructions
              </h3>
              <p className="text-gray-300 text-base">{info.strInstructions}</p>
            </div>
          </div>
          <button
            onClick={handleBackClick}
            className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Back to HomePage
          </button>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
