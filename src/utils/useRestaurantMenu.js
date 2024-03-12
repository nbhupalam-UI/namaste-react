import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

export const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  const fetchResData = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const jsonData = await data.json();
    setResData(jsonData);
  };

  useEffect(() => {
    fetchResData();
  }, []);

  return resData;
};
