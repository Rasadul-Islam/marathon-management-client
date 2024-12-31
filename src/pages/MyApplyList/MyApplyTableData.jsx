import React from 'react';
import Swal from 'sweetalert2';

const MyApplyTableData = ({myRegister, myRegisterList, setMyRegisterList}) => {
    const {_id, marathonTitle, marathonStart} = myRegister;

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
                        const remaining = myRegisterList.filter(myRegister=>myRegister._id!==_id);
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

    return (
        
           <tr>
                <td className="border border-gray-300 px-4 py-2 text-base md:text-lg text-center">{marathonTitle}</td>
                <td className="border border-gray-300 px-4 py-2 text-base md:text-lg text-center">{marathonStart}</td>
                <td className="border border-gray-300 px-4 py-2 flex flex-col md:flex-row gap-1 justify-center ">
                    <button
                        className="btn bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        // onClick={() => setIsUpdateModalOpen(true)}
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
    );
};

export default MyApplyTableData;