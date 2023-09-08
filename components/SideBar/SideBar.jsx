'use client'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBarTab from "./SideBarTab";
import { toggleSideBar } from "@/redux/feature/sideBarSlice";
import { Menu } from "@/lib/menu";

const SideBar = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector((store) => store.sideBar.isSideBarOpen)

  const handleSideBar = () => {
    dispatch(toggleSideBar());
  }

  return (
    <div className={`sideBar ${showSideBar ? "sideBarOpen" : ""}`}>
      {/* Button */}
      {/* <button onClick={handleSideBar}>
        {showSideBar ? (
          <img 
            src={LeftArrow}                
            alt="side bar arrow" 
            className="sideBar_arrow "
          />
        ) : (
          <img 
            src={Arrow}
            alt="side bar arrow" 
            className="sideBar_arrow mb-50"
          />
        )}
      </button>  */}
      
      {/* Dashboard Text */}
      {/* {
        showSideBar && (
          <div className="dashBoard">
            <img src={DashBoard} alt="" />
            <h4>DASHBOARD</h4>
          </div>
        )
      } */}

      <div className="sidebar_nav">
        {/* Navigation */}
        {/* {Menu.map((item) => (
          <SideBarTab 
            key={item.title}
            title={item.title}
            // iconUrl={item.imgUrl}
            subMenu={item.submenu}
          />
        ))} */}
      </div>
    </div>
  )
}

export default SideBar;
