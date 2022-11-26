import React, { useContext } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const MyOrdersCard = ({ indx, myOrder, setDeletingOrder, isLoading }) => {
    const { user } = useContext(AuthContext);

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div
            className="flex gap-10 mb-5 shadow-md shadow-green-600 p-3 rounded-md">
            <div>
                <p>{indx + 1}</p>
            </div>
            <div>
                <p className='text-xl font-semibold underline'>Book Details</p>
                <div>
                    <p className='font-semibold text-gray-500'>
                        Order
                        <span className='ml-1'>{myOrder._id}</span>

                    </p>
                    <p>Book Name:
                        <span className='font-semibold ml-1'>{myOrder.itemName}</span>
                    </p>
                    <p>Price:
                        <span className='font-semibold ml-1'>
                            {myOrder.itemPrice ?
                                myOrder.itemPrice :
                                '0'
                            }
                        </span> tk
                    </p>
                </div>
            </div>

            <div className='max-w-xs'>
                <p className='text-xl font-semibold underline'>Your Information</p>
                <div>
                    <p>Email:
                        <span className='font-semibold ml-1'>{user?.email}</span>
                    </p>
                    <p>Phone:
                        <span className='font-semibold ml-1'>
                            {myOrder.phone}
                        </span>
                    </p>
                    <p>Meeting Location:
                        <span className='font-semibold ml-1'>
                            {myOrder.meetingLocation}
                        </span>
                    </p>
                </div>
            </div>


            <div>
                <p className='text-xl font-semibold underline'>Payment Status</p>
                {
                    myOrder.itemPrice && !myOrder.paid &&
                    <Link to={`/dashboard/payment/${myOrder._id}`}>
                        <button className=''>Pay</button>
                    </Link>
                }
                {
                    myOrder.itemPrice && myOrder.paid &&
                    <button className=''>Paid</button>
                }
            </div>
            <div>
                <label onClick={() => setDeletingOrder(myOrder)} htmlFor="confirmation-modal"
                    className='cursor-pointer tooltip tooltip-warning'
                    data-tip="Delete Order">
                    <RiDeleteBin5Fill
                    ></RiDeleteBin5Fill>
                </label>
            </div>
        </div>
    );
};

export default MyOrdersCard;