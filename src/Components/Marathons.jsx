import React, { useEffect, useState } from 'react';
import MarathonCard from './MarathonCard';
import { useLocation } from 'react-router-dom';

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [showSortButton, setShowSortButton] = useState(false);

    const location = useLocation();

    useEffect(() => {
        fetchMarathons();

        if (location.pathname === "/marathons") {
            setShowSortButton(true);
        } else {
            setShowSortButton(false);
        }
    }, [location.pathname]);

    // Fetch marathons data using fetch
    const fetchMarathons = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/marathons`, {
                method: 'GET',
            });
            const data = await response.json(); 
            setMarathons(data);
        } catch (error) {
            console.error('Error fetching marathons:', error);
        }
    };
    // Function to sort marathons by date
    const handleSort = () => {
        const sortedMarathons = [...marathons].sort((a, b) => {
            return sortOrder === 'asc'
                ? new Date(a.startMarathon) - new Date(b.startMarathon)
                : new Date(b.startMarathon) - new Date(a.startMarathon);
        });

        setMarathons(sortedMarathons);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
    };

    return (
        <div className='container mx-auto mt-20 mb-10 py-10 bg-gray-300 rounded-lg'>
            <h1 className='text-2xl md:text-4xl text-center font-bold mb-10'>All Marathons:</h1>
            {showSortButton && (
                <div className="text-end mx-10 mb-10">
                    <button 
                        onClick={handleSort}
                        className="btn bg-lime-300 text-black px-4 py-2 text-base border-none rounded-md shadow-md hover:bg-lime-400 transition-all"
                    >
                        Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                    </button>
                </div>
            )}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
                    {marathons.map(marathon =>(
                        <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>
                        ))}
                </div>
        </div>
    );
};

export default Marathons;
