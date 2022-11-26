import React from 'react';

const ConfirmationModal = ({ title, message, modalData, successAction,
    successButton, closeModal }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>

                    <div className="modal-action">
                        <label htmlFor="confirmation-modal"
                            onClick={() => successAction(modalData)}
                            className='px-2 py-1 font-semibold rounded outline outline-1 outline-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer'
                        >
                            {successButton}
                        </label>
                        <button
                            onClick={closeModal}
                            className='px-2 py-1 font-semibold rounded outline outline-1 outline-gray-600 hover:bg-gray-600 hover:text-white hover:cursor-pointer'
                        >
                            Cancel
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;