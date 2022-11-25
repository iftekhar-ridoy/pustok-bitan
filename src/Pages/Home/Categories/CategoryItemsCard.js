import React from 'react';

const CategoryItemsCard = ({ item }) => {
    const { name, location, original_price, picture, resale_price, seller_name, time, uses_years } = item;
    console.log(picture);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="item" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>Upload Time: {time}</p>
                    <p>Seller: {seller_name}</p>
                    <p>Location: {location}</p>
                    <p>Orginal Price: ${original_price}</p>
                    <p>Resale Price: ${resale_price}</p>
                    <p>Usage Years: {uses_years}</p>
                    <div className="card-actions justify-center mt-5">
                        <button
                            className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'>
                            Buy Now
                        </button>
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
