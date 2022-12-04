import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Header/Navbar';

const Main = () => {
    return (
        <div>
            <ScrollRestoration />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;