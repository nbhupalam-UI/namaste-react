import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import {UserDataContext} from "../utils/UserDataContext";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, costForTwo, avgRatingString, sla }) => {
  const { loggedInUser } = useContext(UserDataContext);
  return (
    <div className="border border-[#d3d5df] rounded-[6px] min-h-[300px] mx-0 mb-8 py-5 px-5 box-border hover:cursor-pointer hover:shadow-2xl">
      <img
        className="w-full rounded-[6px]"
        src={`${CDN_URL}/${cloudinaryImageId}`}
      />
      <h3 className="mt-2">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4 className="font-medium">{loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
