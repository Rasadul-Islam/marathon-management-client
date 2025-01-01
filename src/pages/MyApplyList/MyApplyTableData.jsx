import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MyApplyTableData = ({ myRegister, myRegisterList, setMyRegisterList }) => {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const { _id, marathonTitle, contactNumber, marathonStart, firstName, lastName, age } = myRegister;



    const handleDelete = _id => {
        fetch(`http://localhost:5000/marathons-register/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your Registration Has Been Removed!",
                        icon: "success",
                    });
                    const remaining = myRegisterList.filter(myRegister => myRegister._id !== _id);
                    setMyRegisterList(remaining);
                } else {
                    Swal.fire({
                        title: "Opps!",
                        text: "There is some problem!",
                        icon: "error"
                    });
                }
            })
    }

    // Update Apply
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.marathonTitle.value;
        const contactNumber = form.contactNumber.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const age = form.age.value;

        const updatedMarathonRegister = { title, contactNumber, firstName, lastName, age };

        fetch(`http://localhost:5000/marathons-register/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedMarathonRegister)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
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
                <td className="border border-gray-300 px-4 py-2 text-base md:text-lg text-center">{marathonTitle}</td>
                <td className="border border-gray-300 px-4 py-2 text-base md:text-lg text-center">{marathonStart}</td>
                <td className="border border-gray-300 px-4 py-2 text-base md:text-lg text-center">{contactNumber}</td>
                <td className="border border-gray-300 px-4 py-2 flex flex-col md:flex-row gap-1 justify-center ">
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
                        <h2 className="text-xl font-bold mb-4">Update Marathon Registration</h2>
                        <form onSubmit={handleUpdateSubmit}>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Marathon Title:</label>
                                <input type="text" name='marathonTitle' defaultValue={marathonTitle} className="input input-bordered max-w-xs ml-16 capitalize" readOnly />
                            </div>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Contact Number:</label>
                                <input type="text" name='contactNumber' defaultValue={contactNumber} className="input input-bordered max-w-xs ml-16 capitalize" />
                            </div>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">First Name:</label>
                                <input type="text" name='firstName' defaultValue={firstName} className="input input-bordered max-w-xs ml-16 capitalize" />
                            </div>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Last Name:</label>
                                <input type="text" name='lastName' defaultValue={lastName} className="input input-bordered max-w-xs ml-16 capitalize" />
                            </div>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Age:</label>
                                <input type="number" name='age' defaultValue={age} className="input input-bordered max-w-xs ml-16 capitalize" />
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


export default MyApplyTableData;