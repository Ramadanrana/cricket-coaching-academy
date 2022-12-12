import React from 'react';
import { useQuery } from '@tanstack/react-query';

import './ad.css';
import { useState } from 'react';
import Deletemodal from './Deletemodal';


const Adminmessage = () => {
    const [deletedata, setDeletedata] = useState(null);



    const { data: messages = [], refetch } = useQuery({
        queryKey: ['messages'],
        queryFn: () => fetch('http://localhost:5000/message')

            .then(res => res.json())


    })

    const handledelete = deletedata => {
        fetch(`http://localhost:5000/message/${deletedata._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }


        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();

                }
            })



    }
    return (
        <div>
            <h1 className='text-3xl text-center text-blue-400 py-8'>All Messages</h1>


            <div>

                <div>
                    <table className="table w-10/12 mx-auto">

                        <thead className='bg-lime-300' >
                            <tr  >
                                <th ></th>
                                <th  >Name</th>
                                <th >Email</th>
                                <th >Phone</th>
                                <th >Message</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>



                            {
                                messages.map((m, i) => <tr className='tdd'>
                                    <th className='tddd' >{i + 1}</th>

                                    <td >{m.firstname} {m.lastname}</td>
                                    <td >{m.email}</td>
                                    <td >{m.phone}</td>
                                    <td >{m.message}</td>
                                    <td ><label onClick={() => { setDeletedata(m) }} className='btn btn-xs btn-error' htmlFor="my-modal" >Delete</label></td>


                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletedata && <Deletemodal deletedata={deletedata} handledelete={handledelete}></Deletemodal>
            }



        </div >
    );
};

export default Adminmessage;