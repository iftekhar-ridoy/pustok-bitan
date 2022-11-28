import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import MyProductsCard from './MyProductsCard';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import useTitle from '../../../Hook/useTitle';



const MyProducts = () => {
    useTitle('My Products');
    const { user } = useContext(AuthContext);
    const [deletingOrder, setDeletingOrder] = useState(null);

    console.log(user)

    const closeModal = () => {
        setDeletingOrder(null);
    }

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['addProduct', user?.email],
        queryFn: async () => {
            try {
                if (user?.email) {
                    const res = await fetch(`https://pustok-bitan-server.vercel.app/addProduct?email=${user?.email}`);
                    const data = await res.json();
                    return data;
                }
                return [];
            }
            catch (error) {

            }
        }
    });

    const handelDeleteOrder = (myProduct) => {
        console.log(myProduct);
        fetch(`https://pustok-bitan-server.vercel.app/addProduct/${myProduct._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount > 0) {
                    refetch();
                    toast.success(`${myProduct.bookName} is Deleted`);
                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }


    return (

        <div className='max-w-5xl mx-auto mt-10'>
            <h3 className='text-3xl font-semibold mb-5 mx-5'>My Products</h3>
            {
                myProducts?.map(myProduct =>
                    <MyProductsCard
                        key={myProduct._id}
                        myProduct={myProduct}
                        setDeletingOrder={setDeletingOrder}
                        isLoading={isLoading}
                    ></MyProductsCard>
                )
            }

            {
                deletingOrder &&
                <ConfirmationModal
                    title={`Confirm to Delete this Product`}
                    message={`If you delete this product, It can not be UNDONE`}
                    successAction={handelDeleteOrder}
                    successButton='Delete'
                    modalData={deletingOrder}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }

        </div>
    );
};

export default MyProducts;