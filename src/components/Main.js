import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Main = () => {
  const [resList, setResList] = useState([]);
  const [resListInitial, setResListInitial] = useState([]);
  const [searchText, setSearchText] = useState("");
  const renderTopRated = () => {
    const res = [...resList];
    setResList(res.filter((f) => f.info.avgRatingString > 4));
  };

  const fetchRes = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.40374076706263&lng=78.3740595899769&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await data.json();
    const list = resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(list);
    setResListInitial(list);
  };

  const handleSearch = () => {
    if (searchText) {
      setResList(
        resListInitial.filter((f) => {
          return f.info.name.toLowerCase().includes(searchText.toLowerCase());
        })
      );
    }
  };

  useEffect(() => {
    fetchRes();
  }, []);

  return (
    <div className="main">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if(!e.target.value) {
                setResList(resListInitial);
              }
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="top-rated-btn" onClick={renderTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      {resList.length === 0 ? (
        !searchText ? (
          <Shimmer />
        ) : (
          <p>No results found. Please refrain your search!!!</p>
        )
      ) : (
        <div className="restaurant-container">
          {resList.map((res) => {
            return <RestaurantCard {...res.info} key={res.info.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
