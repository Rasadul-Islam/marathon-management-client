import React, { useContext, useState, useEffect, useRef } from "react";
import { GiRun } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext/AuthContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    // Close menu 
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [open]);

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log('successfully Log Out')
            })
            .catch(error => {
                console.log('failed to Log Out')
            })
    }

    const activeButtonClass = "btn bg-lime-300 border-none hover:text-gray-600 text-base md:text-lg";
    const buttonClass = "btn border-none hover:text-gray-600 text-base md:text-lg";

    return (
        <nav className="bg-gray-500 text-white px-5 py-4 flex justify-between items-center">
            {/* Left Side: Logo */}
            <div>
                <NavLink to="/" className=" flex gap-2 text-2xl md:text-4xl font-bold"><GiRun />RunWay </NavLink>
            </div>


            {/* Right Side: Links */}
            <div className="flex gap-5">
                <div ref={menuRef} className={`flex flex-col gap-2 absolute z-10 right-5 top-20 md:relative md:top-0`}>
                    <ul className={`flex flex-col gap-2 md:absolute md:top-20 md:-right-20 ${open ? "block" : "hidden"
                        }`}>
                        <li className={buttonClass}>Add Marathon</li>
                        <li className={buttonClass}>My Marathon List</li>
                        <li className={buttonClass}>My Apply List</li>
                    </ul>
                    <div className={`flex flex-col gap-2 md:flex-row ${open ? "block" : "hidden md:flex"
                        }`}>
                        <NavLink to="/marathons" className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>Marathons</NavLink>
                        {user ? (
                            <>
                                <div className="flex flex-col md:flex-row gap-2">
                                    {/* Dashboard button */}
                                    <NavLink
                                        to="/dashboard"
                                        className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>
                                        Dashboard
                                    </NavLink>
                                    {/* log Out button */}
                                    <button
                                        onClick={handleLogOut}
                                        className="btn border-none text-base md:text-lg hover:bg-red-500 hover:text-white flex gap-2 justify-center items-center font-bold"
                                    >
                                        <FiLogOut /> Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>Login</NavLink>
                                <NavLink to="/register" className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>Register</NavLink>
                            </>
                        )}
                    </div>
                </div>
                {/* Hamburger Menu/Profile */}
                <div
                    className=""
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <IoClose className="bg-gray-200 text-black text-4xl rounded-full w-12 h-12 p-1 hover:rotate-180 duration-700" />
                    ) : (
                        user ? (
                            <div>
                                <img
                                    src={user?.photoURL || "https://i.ibb.co/61HT020/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu.jpg"}
                                    alt="user Avatar"
                                    className="w-12 h-12 rounded-full bg-gray-200"
                                />
                            </div>
                        ) : (
                            <IoMenu className="bg-gray-200 text-black text-4xl rounded-full w-12 h-12 p-1" />
                        )
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
