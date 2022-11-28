import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../Shared/Loader/Loader";
import BuyItemModal from "../Home/Categories/BuyItemModal";

const Advertise = () => {
    const [itemInfo, setItemInfo] = useState('');

    const { data: products = [], isLoading, refetch, } = useQuery({
        queryKey: ["adsProducts"],
        queryFn: async () => {
            try {
                const res = await fetch('https://pustok-bitan-server.vercel.app/addAdvertise');
                const data = await res.json();
                return data;
            } catch (error) { }
        },
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="mx-5 my-20">

            {products.length ? (
                <>
                    <h2 className='text-3xl text-center font-semibold mb-5'>Advertisement</h2>
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
                        {
                            products?.map((product) => (
                                <div key={product._id} className="card glass">
                                    <figure>
                                        <img
                                            src={product.image}
                                            className="w-full p-10 h-[350px]"
                                            alt="car!"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-black">{product.bookName}</h2>
                                        <p className="text-start">Resale Price: {product.bookResalePrice} Taka</p>
                                        <p className="text-start">Orginal Price: {product.bookOrginalPrice} Taka</p>
                                        <div className="card-actions justify-center mt-5">
                                            <label
                                                htmlFor="buy-item-modal"
                                                className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'
                                                onClick={() => setItemInfo(product)}
                                            >Order Now</label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </>
            ) : (
                ""
            )}
            <BuyItemModal
                itemInfo={itemInfo}
                setItemInfo={setItemInfo}
            ></BuyItemModal>
        </div>
    );
};

export default Advertise;