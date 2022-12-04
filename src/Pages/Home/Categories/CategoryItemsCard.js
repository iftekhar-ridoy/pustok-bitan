import React from 'react';
import { Link } from 'react-router-dom';
// import './CategoryItemsCard.css';

const CategoryItemsCard = ({ item, setItemInfo }) => {
    const { name, picture, resale_price, seller_name, id } = item;


    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl h-full">
                <figure className='pt-5'><img title={name} src={picture} className='h-48 w-48 rounded' alt="item" /></figure>
                <div className="card-body pt-1 text-center">
                    <h2 title={name} className="text-xl font-semibold">{name.slice(0, 22)}</h2>
                    <p className='-mt-2'>Seller: {seller_name}</p>
                    <p className='-mt-2'>Resale Price: ${resale_price}</p>

                    <div className="card-actions justify-center mt-0">
                        <label
                            htmlFor="ItemDetails"
                            className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'
                            onClick={() => setItemInfo(item)}
                        >Details</label>

                        {/* <button
                            className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'>
                            Add to Cart
                        </button> */}

                        <Link to={`/item/${id}`}>
                            <button
                                className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'>
                                Add to Cart
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div >

    );
};

export default CategoryItemsCard;
