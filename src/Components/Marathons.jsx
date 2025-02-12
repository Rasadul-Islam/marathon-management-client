import React, { useEffect, useState } from 'react';
import MarathonCard from './MarathonCard';

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetchMarathons();
    }, []);

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

    return (
        <div className='container mx-auto mt-20 mb-10 py-10 bg-gray-300 rounded-lg'>
            <h1 className='text-2xl md:text-4xl text-center font-bold mb-10'>All Marathons:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
                    {marathons.map(marathon =>(
                        <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>
                        ))}
                </div>
        </div>
    );
};

export default Marathons;
