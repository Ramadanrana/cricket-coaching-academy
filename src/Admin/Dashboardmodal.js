import React from 'react';

const Dashboardmodal = ({ deletedash, handledeletedash }) => {
    return (
        <div>




            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-pink-700">Are you sure want to delete {deletedash.name}?</h3>

                    <div className="modal-action">
                        <label onClick={() => handledeletedash(deletedash)} htmlFor="my-modal" className="btn btn-sm btn-error">delete</label>
                        <label htmlFor="my-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboardmodal;