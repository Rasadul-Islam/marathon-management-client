import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MarathonTableData = ({ myMarathon, myMarathons, setMyMarathons }) => {
    const { _id, title, location, runningDistance, startMarathon, photoURL } = myMarathon;
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [updatedData, setUpdatedData] = useState({
        title,
        location,
        runningDistance,
    });

    // Delete marathon Fuction
    const handleDelete = (_id) => {
        fetch(`${import.meta.env.VITE_API_URL}/marathons/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Marathon Has Been Removed!',
                        icon: 'success',
                    });
                    const remaining = myMarathons.filter((myMarathon) => myMarathon._id !== _id);
                    setMyMarathons(remaining);
                } else {
                    Swal.fire({
                        title: 'Oops!',
                        text: 'There is some problem!',
                        icon: 'error',
                    });
                }
            });
    };


    // Update Marathon Informathon
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.marathonTitle.value;
        const location = form.location.value;
        const runningDistance = form.runningDistance.value;
        const photoURL = form.photoURL.value;

        const updatedMarathon = { title, location, runningDistance, photoURL };

        fetch(`${import.meta.env.VITE_API_URL}/marathons/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedMarathon)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    console.log(data);
                    Swal.fire({
                        title: "Updated!",
                        text: "Your Marathon Successfully Updated!",
                        icon: "success"
                    });
                    window.location.reload();
                } else {
                    Swal.fire({
                        title: "Opps!",
                        text: "There is some problem!",
                        icon: "error"
                    });
                }
            })

    };

    return (
        <>
            <tr>
                <td className="border border-gray-300 px-4 py-2 text-base md:text-lg text-center">{title}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{location}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{runningDistance} km</td>
                <td className="border border-gray-300 px-4 py-2 flex flex-col md:flex-row gap-1 justify-center">
                    <button
                        className="btn bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => setIsUpdateModalOpen(true)}
                    >
                        Update
                    </button>
                    <button
                        className="btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDelete(_id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>

            {/* Modal */}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Update Marathon</h2>
                        <form onSubmit={handleUpdateSubmit}>

                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Marathon Title:</label>
                                <input type="text" name='marathonTitle' defaultValue={title} className="input input-bordered max-w-xs ml-16 capitalize" />
                            </div>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Location:</label>
                                <input type="text" name='location' defaultValue={location} className="input input-bordered max-w-xs ml-16 capitalize" />
                            </div>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Running Distance:</label>
                                <select name='runningDistance' className="select select-bordered max-w-xs ml-16" defaultValue={runningDistance}>
                                    <option>3 k</option>
                                    <option>10 k</option>
                                    <option>25 k</option>
                                </select>
                            </div>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Photo URL:</label>
                                <input type="text" name='photoURL' defaultValue={photoURL} className="input input-bordered max-w-xs ml-16 capitalize" />
                            </div>
                            <div className='flex justify-center mt-5 gap-5'>
                                <button
                                    type="button"
                                    onClick={() => setIsUpdateModalOpen(false)}
                                    className="btn bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-lime-400 px-5 py-1 rounded hover:bg-lime-500 "
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default MarathonTableData;
