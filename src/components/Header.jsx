import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHandlerClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-2xl ">
      <div className="flex col-span-2">
        <img
          onClick={() => toggleHandlerClick()}
          className="h-9 cursor-pointer"
          alt="menu"
          src="https://img.icons8.com/sf-regular/1200/menu.jpg"
        />
        <img
          className="h-9 px-4"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="flex col-span-8 justify-center ">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className="py-2 px-5 bg-gray-100 cursor-pointer border border-gray-400 rounded-r-full ">
          🔍︎
        </button>
      </div>
      <div className="flex col-span-2 justify-end">
        <img
          className="h-9"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
