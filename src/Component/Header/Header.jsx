
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const link = <>

       <li className='text-xl'> <NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600" : ""
            }>
            Home
        </NavLink></li>

    <li className='text-xl'>
    <NavLink to="/donations"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600" : ""
            }>
            Donations
        </NavLink>
    </li>

        <li className='text-xl'>
        <NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600" : ""}>
            Statistics
        </NavLink>
        </li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mr-3 font-bold">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src="/public/Logo.png" alt="" /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-4 font-bold">
                        {link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;