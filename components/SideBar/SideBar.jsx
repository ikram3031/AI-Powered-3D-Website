'use client'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBarTab from "./SideBarTab";
import { toggleSideBar } from "@/redux/feature/sideBarSlice";
import { Menu } from "@/lib/menu";
import Link from "next/link";

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
        <button className="px-1 flex items-center justify-end text-secondary" onClick={handleSideBar}>
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

      <div className="text-gray-100 w-4/5 mx-auto flex items-center justify-center gap-4 my-2">
        <ul>
          {Menu.map((item, index) => (
            <li key={index}>
              <div className="flex gap-2 items-center justify-start py-1 w-full">
                <div className="w-10 h-10 bg-textColor border-2 border-secondary flex items-center justify-center text-white font-bold text-md rounded-full">
                  {item.letter}
                </div>
                { showSideBar && (
                  <Link href={item.url}>
                    <span className="text-md font-semibold">
                      {item.title}
                    </span>                    
                  </Link>
                ) }                
              </div>
              {item.submenu && showSideBar && (
                <ul className="ml-12">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex}>
                      <Link href={subitem.url}>
                        {subitem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar;
