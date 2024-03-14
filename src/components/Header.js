import { Link } from 'react-router-dom'
import { LOGO_URL } from "../utils/constants";
import { useContext } from 'react';
import {UserDataContext} from '../utils/UserDataContext';
import { useSelector } from 'react-redux';


const Header = () => {
  const { loggedInUser } = useContext(UserDataContext);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between items-center fixed w-full z-[999] shadow-lg bg-white top-0 my-0 mx-auto py-[10px] px-[5%]">
      <div className="flex">
        <Link to="/"><img className="w-[100px]" src={LOGO_URL} /></Link>
      </div>
      <ul className="flex list-none m-0 p-0 text-[20px]">
        <li className='pr-3'><Link to="/" className="hover:underline">Home</Link></li>
        <li className='px-3'><Link to="/about" className="hover:underline">About Us</Link></li>
        <li className='px-3'><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        <li className='pl-3 hover:underline font-bold'><Link to="/cart" className="hover:underline">Cart ({cartItems.length})</Link></li>
        <li className='pl-3 hover:underline font-semibold'>{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
