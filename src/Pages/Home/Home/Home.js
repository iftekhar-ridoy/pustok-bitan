import React from 'react';
import useTitle from '../../../Hook/useTitle';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Delivery from '../Delivery/Delivery';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Delivery></Delivery>
        </div>
    );
};

export default Home;