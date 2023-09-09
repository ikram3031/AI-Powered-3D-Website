'use client'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBarTab from "./SideBarTab";
import { toggleSideBar } from "@/redux/feature/sideBarSlice";
import { Menu } from "@/lib/menu";
import Button from "../Button";

const SideBar = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector((store) => store.sideBar.isSideBarOpen)

  const handleSideBar = () => {
    dispatch(toggleSideBar());
  }

  return (
    <div className={`sideBar ${showSideBar ? "sideBarOpen" : ""}`}>
      {/* Button */}
      <div className="flex items-center justify-end w-full py-2">
        <button className="text-dark px-1 flex items-center justify-end" onClick={handleSideBar}>
          { showSideBar ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>        
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          )}      
        </button>
      </div>
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
