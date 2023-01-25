import { useEffect, useState } from "react";
import React from "react";
import "./Mid.css";

export default function MId() {
  const [query, setQuery] = useState("");
  const [apiData, setApiData] = useState(null);

  const getData = async (query) => {
    const APP_ID = import.meta.env.VITE_APPLICATION_ID;
    const APP_KEY = import.meta.env.VITE_APPLICATION_KEY;
    const q = query;
    let url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${q}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      });
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    // console.log(query);
  };

  const handleClick = (event) => {
    event.preventDefault();
    // console.log(query);
    getData(query);
  };

  return (
    <div className="mid">
      <div className="midContainer">
        <div className="title">
          <h1>Get Your Favourite Food Recipes Here</h1>
          <p>Detailed Insturstions on how to cook your delicious food!</p>
        </div>
        <div className="form">
          <form>
            <input
              type="text"
              id="query"
              name="query"
              placeholder="Search Recipe"
              onChange={handleChange}
              value={query}
            />
            <button type="button" onClick={handleClick}>
              Search
            </button>
          </form>
        </div>
        {/* <div className="recipeCards">
          { !apiData.more ? (
            <div>Recipe Not Found</div>
          ): (apiData.hits.map(recipe => {

          }))}
        </div> */}
      </div>
    </div>
  );
}
