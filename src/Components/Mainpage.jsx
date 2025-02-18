import React, { useState } from "react";
import Mealcards from "./Mealcards";

const Mainpage = () => {
  const [data, setdata] = useState();
  const [search, setsearch] = useState("");
  const [msg, setmsg] = useState("");

  const myfun = async () => {
    if (search === "") {
      setmsg("Please Enter Something.");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsondata = await get.json();
      if (jsondata.meals) {
        setdata(jsondata.meals);
        setmsg("");
      } else {
        setdata(null);
        setmsg("No Data Found.");
      }
    }
  };

  const handleinput = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Food Recipe App</h1>
      <div className="searchbar flex justify-center items-center mb-8">
        <input
          type="text"
          placeholder="Enter Dish"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 mr-2"
          onChange={handleinput}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={myfun}
        >
          Search
        </button>
      </div>
      <div className="results mt-4">
        <h2 className="text-center mb-4">{msg}</h2>
        {data && (
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <Mealcards detail={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Mainpage;
