import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Dashboardmodal from './Dashboardmodal';
import { toast } from 'react-hot-toast'

const Dashboard = () => {

    const [deletedash, setDeletedash] = useState(null);

    const { data: dashboards = [], refetch } = useQuery({
        queryKey: 'admission',
        queryFn: () => fetch('http://localhost:5000/admission')
            .then(res => res.json())
    })
    const handledeletedash = (deletedash) => {
        fetch(`http://localhost:5000/admission/${deletedash._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.error('Deleted Successfully', {
                        duration: 2000,
                        position: 'top-center',
                    })
                    refetch();
                }
            })

    }
    return (
        <div>
            <h1 className='text-3xl text-center text-blue-400 py-8' >All Application</h1>

            <div className="overflow-x-auto">
                <table className="lg:table-fixed table-normal w-10/12 mx-auto">

                    <thead>
                        <tr className='bg-blue-300'>
                            <th>index</th>
                            <th>Name</th>
                            <th>Father</th>
                            <th>Mother</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            dashboards.map((d, i) => <tr>
                                <th>{i + 1}</th>
                                <td className='py-8'>{d.name}</td>
                                <td>{d.father} </td>
                                <td>{d.mother} </td>
                                <td>{d.phone} </td>
                                <td>{d.address} </td>
                                <td><label onClick={() => setDeletedash(d)} htmlFor="my-modal" className="btn btn-xs btn-error">Delete</label> </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletedash && <Dashboardmodal deletedash={deletedash} handledeletedash={handledeletedash}></Dashboardmodal>
            }
        </div>
    );
};

export default Dashboard;