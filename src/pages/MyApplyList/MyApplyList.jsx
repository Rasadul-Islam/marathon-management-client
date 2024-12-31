import React from 'react';
import MyRegisterTableData from './MyRegisterTableData';
import { useLoaderData } from 'react-router-dom';

const MyApplyList = () => {
    const myRegisterList = useLoaderData();

    return (
        <div className='container max-w-5xl mx-auto my-10'>
            <h1 className='text-center font-bold text-xl md:text-2xl my-10'>My Marathons Count: {myRegisterList.length}</h1>
            <div className='overflow-x-auto'>
                <table className='table-auto w-full border-collapse border border-gray-300 mx-auto'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border border-gray-300 px-4 py-2'>Title</th>
                            
                            <th className='border border-gray-300 px-4 py-2'>Marathon Start</th>
                            <th className='border border-gray-300 px-4 py-2'>Marathon Aplly Count</th>
                            <th className='border border-gray-300 px-4 py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myRegisterList.map((myRegister) => (
                            <MyRegisterTableData key={myRegister._id} myRegister={myRegister}></MyRegisterTableData>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplyList;