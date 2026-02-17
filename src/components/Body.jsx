import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
