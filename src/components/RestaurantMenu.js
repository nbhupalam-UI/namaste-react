import { useParams } from 'react-router-dom';
import { useRestaurantMenu } from '../utils/useRestaurantMenu';

import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);
    if(resData === null) return;
    const { name, cuisines } = resData?.data?.cards[0]?.card?.card?.info;
    const itemCategories = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((eachItem) => {
        return eachItem.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    const onCategoryClick = (newIndex) => {
        if(showIndex === newIndex) {
            setShowIndex(null);
        } else {
            setShowIndex(newIndex);
        }
    }

    return (
        <div className='max-w-[50%] mx-auto'>
            <h1 className='font-bold text-xl'>{name}</h1>
            <p>{cuisines.join(', ')}</p>
            {itemCategories.map((m, i) => {
                return <RestaurantCategory data={m?.card?.card} key={i} showItems={i === showIndex} onCategoryClick={onCategoryClick} itemIndex={i} />
            })}
        </div>
    );
};

export default RestaurantMenu;