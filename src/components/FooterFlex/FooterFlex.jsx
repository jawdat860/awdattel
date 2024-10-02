import { FaUser, FaPhone, FaUserMinus } from "react-icons/fa6";
import BuyPage from "../Navbar/BuyPage";
import PhoneModel from "./PhoneModel";
import { useNavigate } from 'react-router-dom';

function FooterFlex() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="bg-black fixed inset-x-4 bottom-4 h-16 rounded-full shadow-lg flex justify-around items-center px-2">
      <ul className="flex justify-between w-full items-center text-white text-2xl">
        <li className="hover:scale-110 transition-transform duration-200 cursor-pointer">
          <FaUser />
        </li>
        <li
          className="hover:scale-110 transition-transform duration-200 cursor-pointer"
          onClick={() => navigate('/')} // Navigate to home page when clicked
        >
          <FaUserMinus />
        </li>
        <BuyPage />
        <PhoneModel />
      </ul>
    </div>
  );
}

export default FooterFlex;

