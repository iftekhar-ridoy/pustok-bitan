import React from 'react';

const BannerItem = ({ slide }) => {
    const { slideImg, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={slideImg} alt='' className="w-full rounded-xl" />
            </div>


            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 -bottom-2">
                <a href={`#slide${prev}`} className="md:btn md:btn-circle md:btn-success mr-5">❮</a>
                <a href={`#slide${next}`} className="md:btn md:btn-circle md:btn-success">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;