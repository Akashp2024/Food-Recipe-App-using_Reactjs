import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setinfo] = useState("");
  console.log(mealid);

  const getinfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsondata = await get.json();
    // console.log(jsondata.meals[0]);
    setinfo(jsondata.meals[0]);
  };
  if (mealid != "") {
    getinfo();
  }
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
          <Link
            to="/"
            className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Back to HomePage
          </Link>
          {/* <a href="#">More Info</a> */}
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
