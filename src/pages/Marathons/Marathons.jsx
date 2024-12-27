import React, { useEffect, useState } from 'react';
import MarathonCard from '../../Components/marathonCard';

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
            <h1>Marathons: {marathons.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {marathons.map(marathon =>(
                        <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>
                        ))}
                </div>
        </div>
    );
};

export default Marathons;
