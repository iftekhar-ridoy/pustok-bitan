import React from 'react';
import Loader from '../../../Shared/Loader/Loader';

const MyProductsCard = ({ myProduct, setDeletingOrder, isLoading }) => {
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div
            className="flex flex-col lg:flex-row justify-evenly gap-5 mb-5 mx-5 shadow-md shadow-blue-200 p-3 rounded-md">
            <div className="avatar flex justify-center items-center">
                <div className="w-full md:w-40 rounded">
                    <img src={myProduct.image} alt='bookImage' />
                </div>
            </div>
            <div className=''>
                <div>
                    <p className='text-xl font-semibold underline'>Product Details</p>
                    <p>Book Name:
                        <span className='font-semibold ml-1'>{myProduct.bookName}</span>
                    </p>
                    <p>Book Category:
                        <span className='font-semibold ml-1'>{myProduct.bookCategory}</span>
                    </p>
                    <p>Book Condition:
                        <span className='font-semibold ml-1'>
                            {myProduct.bookCondition}
                        </span>
                    </p>
                    <p>Resale Price:
                        <span className='font-semibold ml-1'>
                            {myProduct.bookResalePrice}
                        </span> tk
                    </p>
                    <p>Orginal Price:
                        <span className='font-semibold ml-1'>
                            {myProduct.bookOrginalPrice}
                        </span> tk
                    </p>
                    <p>Purchase Year:
                        <span className='font-semibold ml-1'>
                            {myProduct.purchaseYear}
                        </span>
                    </p>
                    <p>Usage Time:
                        <span className='font-semibold ml-1'>
                            {myProduct.usageTime}
                        </span> month
                    </p>
                </div>
            </div>

            <div className='w-[300px]'>
                <p className='text-xl font-semibold underline'>Your Information</p>
                <div>
                    <p>Email:
                        <span className='font-semibold ml-1'>{myProduct?.sellerEmail}</span>
                    </p>
                    <p>Phone:
                        <span className='font-semibold ml-1'>
                            {myProduct.sellerPhone}
                        </span>
                    </p>
                    <p>Location:
                        <span className='font-semibold ml-1 break-words'>
                            {myProduct.location}
                        </span>
                    </p>
                    <p>Description:
                        <span className='font-semibold ml-1 break-words'>
                            {myProduct.description}
                        </span>
                    </p>
                </div>
            </div>

            <div className=' flex gap-5 justify-center items-center'>
                <div>
                    <label onClick={() => setDeletingOrder(myProduct)} htmlFor="confirmation-modal"
                        className='cursor-pointer'>

                        <p className='px-2 py-1 font-semibold rounded outline outline-1 outline-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer'>Delete Product</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MyProductsCard;