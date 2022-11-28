import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BuyItemModal = ({ itemInfo, setItemInfo }) => {

    const { name: itemName, resale_price } = itemInfo;
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleBuy = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const itemPrice = form.itemPrice.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
            userName,
            email,
            itemName,
            itemPrice: parseInt(itemPrice),
            phone,
            meetingLocation
        }

        fetch('https://pustok-bitan-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    navigate('/myOrders');
                    toast.success('Your Order Has Been Booked Successfully');
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <div>
            <>
                <input type="checkbox" id="buy-item-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="buy-item-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Provide Your Correct Information</h3>

                        <form onSubmit={handleBuy} className='grid grid-cols-1 gap-6 mt-5'>
                            <div>
                                <label className="label flex justify-start">
                                    Name
                                    <span className="text-red-500 text-xl">*</span>
                                </label>
                                <input
                                    type="text"
                                    name='userName'
                                    defaultValue={user?.displayName}
                                    disabled
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className='-mt-3'>
                                <label className="label flex justify-start">
                                    Email
                                    <span className="text-red-500 text-xl">*</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    defaultValue={user?.email}
                                    disabled
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className='-mt-3'>
                                <label className="label flex justify-start">
                                    Book Name
                                    <span className="text-red-500 text-xl">*</span>
                                </label>
                                <input
                                    type="text"
                                    name='itemName'
                                    defaultValue={itemName}
                                    disabled
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className='-mt-3'>
                                <label className="label flex justify-start">
                                    Book Price
                                    <span className="text-red-500 text-xl">*</span>
                                </label>
                                <input
                                    type="text"
                                    name='itemPrice'
                                    defaultValue={resale_price}
                                    disabled
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className='-mt-3'>
                                <label className="label flex justify-start">
                                    Contact Number
                                    <span className="text-red-500 text-xl">*</span>
                                </label>
                                <input
                                    type="number"
                                    name='phone'
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className='-mt-3'>
                                <label className="label flex justify-start">
                                    Meeting Location
                                    <span className="text-red-500 text-xl">*</span>
                                </label>
                                <input
                                    type="text"
                                    name='meetingLocation'
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <input
                                type="submit"
                                value="Buy"
                                className='btn btn-success w-full' />
                        </form>
                    </div>
                </div>
            </>
        </div>
    );
};

export default BuyItemModal;