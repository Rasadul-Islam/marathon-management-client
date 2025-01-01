import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MarathonTableData from '../../Components/MarathonTableData';

const MyMarathonList = () => {
    const loadedMyMarathons = useLoaderData();
    const [myMarathons, setMyMarathons]=useState(loadedMyMarathons);

    return (
        <div className='container max-w-5xl mx-auto my-10'>
            <h1 className='text-center font-bold text-xl md:text-2xl my-10'>My Marathons Post Count: {myMarathons.length}</h1>
            <div className='overflow-x-auto'>
                <table className='table-auto w-full border-collapse border border-gray-300 mx-auto'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border border-gray-300 px-4 py-2'>Title</th>
                            <th className='border border-gray-300 px-4 py-2'>Location</th>
                            <th className='border border-gray-300 px-4 py-2'>Distance</th>
                            <th className='border border-gray-300 px-4 py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myMarathons.map((myMarathon) => (
                            <MarathonTableData key={myMarathon._id} 
                            myMarathon={myMarathon} 
                            myMarathons={myMarathons}
                            setMyMarathons={setMyMarathons}
                            ></MarathonTableData>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyMarathonList;
