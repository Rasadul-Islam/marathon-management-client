import React, { useContext } from "react";
import { GiRun } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext/AuthContext";

const Navbar = () => {

    const {user, logOutUser} = useContext(AuthContext);

    const handleLogOut =()=> {
        logOutUser()
        .then(()=>{
            console.log('successfully Log Out')
        })
        .catch(error=>{
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
            <div className="flex items-center gap-6">
                <NavLink to="/marathons" className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>Marathons</NavLink>
                {user ? (
                    <>
                        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>Dashboard</NavLink>
                        <img
                            src={user.photoURL || "https://i.ibb.co.com/61HT020/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu.jpg"}
                            alt="user Avatar"
                            className="w-12 h-12 rounded-full bg-gray-200"
                        />
                        <button
                            onClick={handleLogOut}
                            className="btn border-none text-base md:text-lg hover:bg-red-500 hover:text-white flex gap-2 justify-center items-center font-bold"
                        >
                        <FiLogOut/> Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>Login</NavLink>
                        <NavLink to="/register" className={({ isActive }) => (isActive ? activeButtonClass : buttonClass)}>Register</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
