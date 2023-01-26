import { useEffect, useState } from "react";
import React from "react";
import "./Mid.css";
import Card from "../card/Card";

export default function MId() {
  const [query, setQuery] = useState("");
  const [apidata, setApiData] = useState([]);

  const handleClick = async () => {
    const APP_ID = import.meta.env.VITE_APPLICATION_ID;
    const APP_KEY = import.meta.env.VITE_APPLICATION_KEY;
    const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiData(data);
      });
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="mid">
      <div>
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
        </div>
        <div className="allRecipes">
          {apidata.length !== 0 && (
            <div className="recipeCards">
              {!apidata.more ? (
                <div>Recipe Not Found</div>
              ) : (
                apidata.hits.map((data, index) => (
                  <Card
                    key={index}
                    image={data.recipe.image}
                    title={data.recipe.label}
                    source={data.recipe.source}
                    link={data.recipe.url}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
