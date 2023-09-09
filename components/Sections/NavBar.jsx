'use client'

import Link from "next/link";
import Button from "../Button";

const NavBar = () => {
  return (
    <nav className="bg-dark text-gray-100">
      <div className="max-w-screen-xl flex items-center justify-between">
        <Link href='/'>
          {/* <img src={Logo} className="logo" alt="Logo" /> */}
        </Link>
        <div className="flex">
          <div  className="flex justify-between items-center">
            {/* <img src={Search} width="19px" height="19px"/> */}
            <input
              type="text"
              placeholder="Search..."
              className="h-8"
            />
          </div>
          <Button type="secondary">
            {/* <img src={LogOut}/> */}
            Logout
          </Button>
          <div className="">
            {/* <img src="/static/profile.png" alt="" /> */}
            <div className="flex-col">
              <h4>Username</h4>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
