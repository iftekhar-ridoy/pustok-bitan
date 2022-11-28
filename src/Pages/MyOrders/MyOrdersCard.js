import React, { useContext } from 'react';
// import { RiDeleteBin5Fill } from 'react-icons/ri';
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
            className="flex flex-col lg:flex-row justify-evenly gap-5 mb-5 mx-5 shadow-md shadow-green-600 p-3 rounded-md">
            <div className=''>
                <div className='flex'>
                    <span className='text-xl font-semibold underline mr-3'> Order Details: {indx + 1}</span>
                    <span>
                        {
                            myOrder.itemPrice && !myOrder.paid &&
                            <p className='text-rose-500 font-semibold px-2 rounded-full border-2 w-fit'>Unpaid</p>
                        }
                        {
                            myOrder.itemPrice && myOrder.paid &&
                            <p className='text-green-500'>Paid</p>
                        }
                    </span>
                </div>
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

            <div className='w-[300px]'>
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
                        <span className='font-semibold ml-1 break-words'>
                            {myOrder.meetingLocation}
                        </span>
                    </p>
                </div>
            </div>

            <div className=' flex gap-5 justify-center items-center'>
                <div>
                    {
                        myOrder.itemPrice && !myOrder.paid &&
                        <Link to={`/dashboard/payment/${myOrder._id}`}>
                            <button className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'>Pay Now</button>
                        </Link>
                    }
                    {
                        myOrder.itemPrice && myOrder.paid &&
                        <button className='px-2 py-1 font-semibold rounded outline outline-1 bg-gray-400  hover:cursor-not-allowed' disabled>Paid</button>
                    }
                </div>
                <div>
                    <label onClick={() => setDeletingOrder(myOrder)} htmlFor="confirmation-modal"
                        className='cursor-pointer'
                    >

                        <p className='px-2 py-1 font-semibold rounded outline outline-1 outline-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer'>Delete Order</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersCard;