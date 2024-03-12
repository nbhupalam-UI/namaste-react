import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from "react-router-dom";
import {UserDataContext} from "../utils/UserDataContext";

const Main = () => {
  const [resList, setResList] = useState([]);
  const [resListInitial, setResListInitial] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName} = useContext(UserDataContext);

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

  if(onlineStatus === false) return <h1>Oops!!! Looks like you are offline, Please check your connection!!!</h1>;

  return (
    <div className="main">
      <div className="flex gap-5 justify-between mb-10">
        <div>
          <input
            type="text"
            className="h-8 w-80 border-gray-500 border rounded mr-[10px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if(!e.target.value) {
                setResList(resListInitial);
              }
            }}
          />
          <button className="h-8 w-24 bg-blue-600 text-white rounded-[4px]" onClick={handleSearch}>Search</button>
          <label className="ml-4 inline-block mr-2">UserName: </label><input type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} className="pl-2 h-8 w-80 border-gray-500 border rounded mr-[10px]"/>
        </div>
        <button className="h-8 w-64 bg-blue-600 text-white rounded-[4px]" onClick={renderTopRated}>
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
        <div className="flex mt-5 flex-wrap gap-x-4">
          {resList.map((res) => {
            return (
              <Link className="w-[24%]" to={`/restaurants/${res.info.id}`} key={res.info.id}>
                <RestaurantCard {...res.info} key={res.info.id} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
