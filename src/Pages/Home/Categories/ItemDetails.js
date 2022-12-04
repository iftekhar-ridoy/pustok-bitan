import React from 'react';


const ItemDetails = ({ itemInfo, setItemInfo }) => {

    const { name, picture, location, resale_price, original_price, uses_years, seller_name } = itemInfo;

    return (
        <div>
            <>
                <input type="checkbox" id="ItemDetails" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box max-w-3xl relative">
                        <label htmlFor="ItemDetails" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* <h3 className="text-lg font-bold">Book Details</h3> */}

                        <div className='md:flex gap-5 '>
                            <div className='p-3'>
                                <img src={picture} alt="" className='h-72 rounded' />
                            </div>
                            <div className='p-3'>
                                <h2>Book Name: <span className='font-bold'>{name}</span></h2>
                                <p>Seller Name: <span className='font-bold'>{seller_name}</span></p>
                                <p>Resale Price: <span className='font-bold'>${resale_price}</span></p>
                                <p>Orginal Price: <span className='font-bold'>${original_price}</span></p>
                                <p>Usage Month: <span className='font-bold'>{uses_years}</span></p>
                                <p>Seller Location: <span className='font-bold'>{location}</span></p>
                                <p>Description: <span className='break-words'></span></p>

                                <div className='mt-5 flex flex-col md:flex-row gap-3 text-center'>

                                    <label
                                        htmlFor="buy-item-modal"
                                        className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'
                                        onClick={() => setItemInfo(itemInfo)}
                                    >Order
                                    </label>

                                    <button
                                        className='md:ml-3 px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'>
                                        Add to Cart
                                    </button>

                                    <label htmlFor="ItemDetails" className="md:ml-3 px-2 py-1 font-semibold rounded outline outline-1 outline-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer'">Cancel
                                    </label>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default ItemDetails;