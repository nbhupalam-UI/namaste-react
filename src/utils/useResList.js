import { useEffect, useState } from "react";

const useResList = () => {
  const [resList, setResList] = useState([]);

  const fetchRes = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.40374076706263&lng=78.3740595899769&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await data.json();
    const list = resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(list);
    setResListInitial(list);
  };

  useEffect(() => {
    fetchRes();
  }, []);

  return resList;
};

export default useResList;
