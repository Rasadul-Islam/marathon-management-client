import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const Dashboard = () => {
    const {user}= useContext(AuthContext)
    return (
        <div className="container mx-auto px-5 py-10">
            <h1 className="text-3xl font-bold text-center mb-10">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card: Add Marathon */}
                <Link to="/dashboard/add-marathon" className="dashboard-card">
                    <div className="p-5 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-2 text-center">Add Marathon</h2>
                        <p className="text-center text-gray-600">
                            Create a new marathon and set all relevant details like location, date, and distance.
                        </p>
                    </div>
                </Link>

                {/* Card: My Marathon List */}
                <Link to={`/dashboard/my-marathon-list/${user.email}`} className="dashboard-card">
                    <div className="p-5 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-2 text-center">My Marathon List</h2>
                        <p className="text-center text-gray-600">
                            View all marathons you have created, and manage their details.
                        </p>
                    </div>
                </Link>

                {/* Card: My Applications */}
                <Link to={`/dashboard/my-apply/${user.email}`} className="dashboard-card">
                    <div className="p-5 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-2 text-center">My Applications</h2>
                        <p className="text-center text-gray-600">
                            Check the marathons you've applied for and track your participation status.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
