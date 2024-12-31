import React from 'react';

const MarathonTableData = ({ myMarathon }) => {
    const { _id, title, location, runningDistance } = myMarathon;



    return (
        <>
            <tr>
                <td className="border border-gray-300 px-4 py-2 text-base md:text-lg text-center">{title}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{location}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{runningDistance} km</td>
                <td className="border border-gray-300 px-4 py-2 flex flex-col md:flex-row gap-1 justify-center">
                    <button
                        className="btn bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => setIsUpdateModalOpen(true)}>
                        Update
                    </button>
                    <button
                        className="btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => setIsDeleteModalOpen(true)}>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default MarathonTableData;
