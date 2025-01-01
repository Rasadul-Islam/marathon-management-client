import React, { useContext } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <aside className="w-48 md:w-64 bg-gray-700 text-white flex flex-col">
                <Link to="/dashboard" className="text-2xl font-bold p-4 border-b border-gray-700">Dashboard</Link>
                <nav className="flex-1 p-4">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/dashboard/add-marathon"
                                className={({ isActive }) =>
                                    `block p-3 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-600"
                                    }`
                                }
                            >
                                Add Marathon
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/dashboard/my-marathon-list/${user.email}`}
                                className={({ isActive }) =>
                                    `block p-3 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-600"
                                    }`
                                }
                            >
                                My Marathon List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/dashboard/my-apply/${user.email}`}
                                className={({ isActive }) =>
                                    `block p-3 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-600"
                                    }`
                                }
                            >
                                My Applications
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-white overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
