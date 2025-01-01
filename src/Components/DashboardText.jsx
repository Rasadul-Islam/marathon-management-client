import React from 'react';

const DashboardText = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen max-h-96'>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 text-center">Welcome to Your Dashboard</h1>
        <p className="text-sm md:text-base lg:text-lg text-center">
            Use the navigation on the left to manage your marathons.
            <br />
            Select an option to get Your need:
        </p>
    </div>
    );
};

export default DashboardText;