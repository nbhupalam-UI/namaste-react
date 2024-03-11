import { useParams } from 'react-router-dom';
import { useRestaurantMenu } from '../utils/useRestaurantMenu';

import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
    const [title, setTitle] = useState('');
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);
    if(resData === null) return;
    const { name, cuisines } = resData?.data?.cards[0]?.card?.card?.info;
    const itemCategories = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((eachItem) => {
        return eachItem.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    return (
        <div className='max-w-[50%] mx-auto'>
            <h1 className='font-bold text-xl'>{name}</h1>
            <p>{cuisines.join(', ')}</p>
            {itemCategories.map((m, i) => {
                return <RestaurantCategory data={m?.card?.card} key={i} showItems={m?.card?.card?.title === title} onCategoryClick={setTitle} />
            })}
        </div>
    );
};

export default RestaurantMenu;