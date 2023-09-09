'use client'

import { signOut } from "next-auth/react";
import Link from "next/link";
import Button from "../Button";
import { toast } from 'react-toastify';

const NavBar = () => {

    const signingOut = () => {
        
        signOut();

        toast.info('Successfully logged out.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    
    return (
        <nav className="bg-dark text-gray-100">
        <div className="max-w-screen-xl flex items-center justify-between py-1">
            <Link href='/'>
            {/* <img src={Logo} className="logo" alt="Logo" /> */}
            </Link>
            <div className="flex gap-4">
                <div  className="flex justify-between items-center">
                    <input
                    type="text"
                    placeholder="Search..."
                    className="h-8"
                    />
                </div>
                <Button                 
                    type="secondary"
                    styles={{
                        margin: "8px"
                    }}    
                    onClick={signingOut}        
                >                    
                    Logout
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>

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
