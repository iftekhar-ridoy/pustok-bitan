import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import { RiDeleteBin5Fill } from "react-icons/ri";
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [deletingOrder, setDeletingOrder] = useState(null);
    console.log(deletingOrder);
    const closeModal = () => {
        setDeletingOrder(null);
    }

    const { data: myOrders = [], refetch, isLoading } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handelDeleteOrder = (myOrder) => {
        console.log(myOrder);
        fetch(`http://localhost:5000/bookings/${myOrder._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount > 0) {
                    refetch();
                    toast.success(`Order for book ${myOrder.itemName} is Deleted`);
                }
                // navigate('/dashboard/manage-doctor')
            })
        // }

    }

    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div className='max-w-5xl mx-auto mt-10'>
            <h3 className='text-3xl font-semibold mb-5 mx-5'>My Orders</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Details</th>
                            <th>My Number</th>
                            <th>Meeting Location</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map((myOrder, indx) =>
                                <tr key={myOrder._id}>
                                    <th>{indx + 1}</th>
                                    <td>
                                        <div>
                                            <p>{myOrder.userName}</p>
                                            <p className='font-semibold text-gray-500'>
                                                <small>Order
                                                    <span className='ml-1'>{myOrder._id}</span>
                                                </small>
                                            </p>
                                            <p>Book Name:
                                                <span className='font-semibold'>{myOrder.itemName}</span>
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
                                    </td>
                                    <td>{myOrder.phone}</td>
                                    <td>{myOrder.meetingLocation}</td>

                                    <td>
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
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingOrder(myOrder)} htmlFor="confirmation-modal"
                                            className='cursor-pointer tooltip tooltip-warning'
                                            data-tip="Delete Order">
                                            <RiDeleteBin5Fill
                                            ></RiDeleteBin5Fill>
                                        </label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {
                deletingOrder &&
                <ConfirmationModal
                    title={`You are about to Delete this order`}
                    message={`If you delete this order, It can not be UNDONE`}
                    successAction={handelDeleteOrder}
                    successButton='Delete'
                    modalData={deletingOrder}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }

        </div >
    );
};

export default MyOrders;