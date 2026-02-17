import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";


const SideBar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if(!isMenuOpen) return null;
  return (
    <div className="w-48 p-4" >
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li>Trending</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>

      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>Watch Later</li>
        <li>Playlists</li>
        <li>Liked</li>
        <li>Downloads</li>
      </ul>
    </div>
  );
};

export default SideBar;
