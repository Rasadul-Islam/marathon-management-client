import React, { useContext, useState, useEffect, useRef } from "react";
import { GiRun } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

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

    // User LogOut function
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log Out Success",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
    }

    const activeButtonClass = "btn  bg-lime-300 border-none hover:text-gray-600 text-base md:text-lg";
    const buttonClass = "btn border-none hover:text-gray-600 text-base md:text-lg";

    return (
        <div className="bg-gray-400 fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md backdrop-filter shadow-md">
            <nav className="container mx-auto text-white px-2 py-3 flex justify-between items-center">
                {/* Left Side: Logo */}
                <div>
                    <NavLink to="/" className=" flex gap-2 text-2xl md:text-4xl font-bold text-lime-300"><GiRun />RunWay </NavLink>
                </div>

                {/* Right Side: Links */}
                <div className="flex">
                    <div ref={menuRef} className={`flex flex-col gap-2 absolute z-10 right-5 top-20 lg:relative lg:top-0`}>

                        <div className={`flex flex-col gap-2 lg:flex-row ${open ? "block" : "hidden lg:flex"
                            }`}>
                            <NavLink to="/" className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>Home</NavLink>
                            <NavLink to="/marathons" className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>Marathons</NavLink>
                            {user ? (
                                <>
                                    <div className="flex flex-col lg:flex-row gap-2">
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
                        className="lg:hidden"
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
                    {/* Fixed User Avatar for Large device */}
                    <div className="hidden lg:flex">
                        <img
                            src={user?.photoURL || "https://i.ibb.co/61HT020/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu.jpg"}
                            alt="user Avatar"
                            className="w-12 h-12 rounded-full bg-gray-200"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
