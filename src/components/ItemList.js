import { CDN_URL } from '../utils/constants'
const ItemList = ({ items }) => {
  return (
    <div className='mt-4'>
      {items.map((m) => {
        return (
          <div key={m.card.info.id} className="border-b-2 border-b-[#d3d3d3] mb-6 pb-6 flex justify-between gap-x-6">
            <div className='w-9/12'>
              <h3 className="font-semibold mb-1">{m.card.info.name}</h3>
              <span className="mb-4 inline-block">₹{(m.card.info.price || m.card.info.defaultPrice)  / 100}</span>
              <p className="text-sm text-gray-600">{m.card.info.description}</p>
            </div>
            <div className='w-3/12 relative'>
                {m.card.info.imageId && <img src={CDN_URL + m.card.info.imageId} className='rounded'/>}
                <button className='absolute border-2 border-b-[#d3d3d3] p-1 w-24 rounded bg-white text-green-700 -bottom-2 left-[50%] translate-x-[-50%]'>Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
