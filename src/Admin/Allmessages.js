import React from 'react';
import './ad.css'

const Allmessages = ({ mess, i }) => {
    const { firstname, lastname, message, email, phone } = mess;

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-10/12 mx-auto">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>



                        <tr>
                            <th>{i + 1}</th>
                            <td>{firstname} {lastname}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{message}</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allmessages;