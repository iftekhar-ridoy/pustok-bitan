import React, { useContext, useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';
import MyOrdersCard from './MyOrdersCard';

import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hook/useTitle';

const MyOrders = () => {
    useTitle('My Orders');
    const { user } = useContext(AuthContext)

    console.log(user);
    const [deletingOrder, setDeletingOrder] = useState(null);
    const closeModal = () => {
        setDeletingOrder(null);
    }

    const { data: myOrders = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;

        }
    });

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
            })

    }

    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div className='max-w-5xl mx-auto mt-10'>
            <h3 className='text-3xl font-semibold mb-5 mx-5'>My Orders</h3>
            {
                myOrders.length > 0 ?
                    myOrders?.map((myOrder, indx) =>
                        <MyOrdersCard
                            key={myOrder._id}
                            myOrder={myOrder}
                            indx={indx}
                            setDeletingOrder={setDeletingOrder}
                            isLoading={isLoading}
                        ></MyOrdersCard>
                    )
                    :
                    <p className='flex justify-center my-10 text-amber-400 text-3xl'>No Order Found</p>
            }

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