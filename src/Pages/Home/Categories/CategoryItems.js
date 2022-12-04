import React, { useState } from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hook/useTitle';
import BuyItemModal from './BuyItemModal';
import CategoryItemsCard from './CategoryItemsCard';
import ItemDetails from './ItemDetails';



const CategoryItems = () => {
    useTitle('Category')
    const categoryItems = useLoaderData();
    const { title, items } = categoryItems;
    const [itemInfo, setItemInfo] = useState('');

    return (
        <div className='max-w-5xl mx-auto my-10'>
            <ScrollRestoration />
            <h1 className='text-3xl font-semibold mx-5 mb-5'>Category: {title}</h1>
            {items.length > 0 ?
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5'>
                    {

                        items?.map(item =>
                            <CategoryItemsCard
                                key={item.id}
                                item={item}
                                setItemInfo={setItemInfo}
                            ></CategoryItemsCard>)

                    }
                </div>
                :
                <p className=' flex justify-center my-10 text-amber-400 text-3xl'>No Book Found</p>}
            {
                items &&
                <ItemDetails
                    itemInfo={itemInfo}
                    setItemInfo={setItemInfo}
                ></ItemDetails>
            }

            {
                items &&
                <BuyItemModal
                    itemInfo={itemInfo}
                    setItemInfo={setItemInfo}
                ></BuyItemModal>
            }


        </div>
    );
};

export default CategoryItems;