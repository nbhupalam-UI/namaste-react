import ItemList from "./ItemList";

const RestaurantCategory = ({ data, onCategoryClick, showItems, itemIndex }) => {
  return (
    <div className="mt-4 mb-6 shadow-lg bg-gray-100 p-4 rounded">
      <button className="flex justify-between w-full" onClick={() => onCategoryClick(itemIndex)}>
        <span className="font-bold">{data.title} ({data.itemCards.length})</span>
        <span className={`${showItems ? 'rotate-180' : ''}`}>⬇️</span>
      </button>
      {showItems &&  <ItemList items={data.itemCards}/> }
    </div>
  );
};

export default RestaurantCategory;
