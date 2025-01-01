import React, { useEffect, useState } from 'react';
import MarathonCard from './marathonCard';

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetchMarathons(); // Call the fetch function
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
        <div className='container max-w-5xl mx-auto my-10'>
            <h1 className='text-2xl md:text-4xl text-center font-bold mb-10'>All Marathons:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {marathons.map(marathon =>(
                        <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>
                        ))}
                </div>
        </div>
    );
};

export default Marathons;
