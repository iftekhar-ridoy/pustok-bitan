import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loader from "../../Shared/Loader/Loader";
import BuyItemModal from "../Home/Categories/BuyItemModal";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";


const Advertise = () => {
    const [itemInfo, setItemInfo] = useState('');

    const { data: products = [], isLoading, } = useQuery({
        queryKey: ["adsProducts"],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/addAdvertise');
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

            <h2 className='text-3xl text-center font-semibold mb-5'>Advertisement</h2>

            <Swiper
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={30}

                freeMode={true}

                pagination={{
                    clickable: true,
                }}

                loop={true}
                // loopFillGroupWithBlank={true}
                navigation={true}

                autoplay={{
                    delay: 1000
                }}

                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }}
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
            >
                <>
                    {
                        products.length ? (
                            <>

                                <div className="">
                                    {
                                        products?.map((product) => (
                                            <SwiperSlide key={product._id}>
                                                <div className="card w-full bg-base-100  h-full justify-center pb-10">
                                                    <figure>
                                                        <img
                                                            src={product.image}
                                                            className="w-48 h-48 rounded"
                                                            alt="book!"
                                                        />
                                                    </figure>
                                                    <div className="mt-0 text-center">
                                                        <h2 className=" text-xl font-semibold">{product.bookName}</h2>
                                                        <p className="">Resale Price: {product.bookResalePrice} Taka</p>
                                                        <p className="">Orginal Price: {product.bookOrginalPrice} Taka</p>
                                                        <div className="card-actions justify-center mt-5">
                                                            <label
                                                                htmlFor="buy-item-modal"
                                                                className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer'
                                                                onClick={() => setItemInfo(product)}
                                                            >Order Now</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                </div>
                            </>
                        ) : (
                            ""
                        )
                    }
                </>

            </Swiper>
            <BuyItemModal
                itemInfo={itemInfo}
                setItemInfo={setItemInfo}
            ></BuyItemModal>
        </div>
    );
};

export default Advertise;