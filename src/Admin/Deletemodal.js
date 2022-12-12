
import React from 'react';

const Deletemodal = ({ deletedata, handledelete }) => {


    return (
        <div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You sure You want to Delete {deletedata.firstname}?</h3>

                    <div className="modal-action">

                        <label htmlFor="my-modal" onClick={() => handledelete(deletedata)} className="btn btn-sm btn-error">Delete</label>
                        <label htmlFor="my-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Deletemodal;