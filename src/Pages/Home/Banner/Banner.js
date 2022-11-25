import React from 'react';
import banner1 from '../../.././Assetes/Banner/banner1.jpg';
import banner2 from '../../.././Assetes/Banner/banner1.jpg';
import banner3 from '../../.././Assetes/Banner/banner1.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        slideImg: banner1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        slideImg: banner2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        slideImg: banner3,
        prev: 2,
        id: 3,
        next: 1
    },
]

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full ">

                {
                    bannerData.map(slide =>
                        <BannerItem
                            key={slide.id}
                            slide={slide}
                        ></BannerItem>)
                }

            </div>
        </div>
    );
};

export default Banner;