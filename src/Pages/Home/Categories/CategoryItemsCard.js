import React from 'react';

const CategoryItemsCard = ({ item, setItemInfo }) => {
    const { name, location, original_price, picture, resale_price, seller_name, time, uses_years } = item;



    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className='bg-slate-200'><img src={picture} className='h-40' alt="item" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>Upload Time: {time}</p>
                    <p>Seller: {seller_name}</p>
                    <p>Location: {location}</p>
                    <p>Orginal Price: ${original_price}</p>
                    <p>Resale Price: ${resale_price}</p>
                    <p>Usage Time: {`${uses_years} month`}</p>
                    <div className="card-actions justify-center mt-5">
                        <label
                            htmlFor="buy-item-modal"
                            className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'
                            onClick={() => setItemInfo(item)}
                        >Order Now</label>
                        <button
                            className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'>
                            Add to wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryItemsCard;
