import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Blog from "../../Pages/Blog/Blog";
import CategoryItems from "../../Pages/Home/Categories/CategoryItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import AddProduct from "../../Pages/Seller/AddProduct/AddProduct";
import MyProducts from "../../Pages/Seller/MyProducts/MyProducts";
import BlankRoute from "../../Shared/BlankRoute/BlankRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><CategoryItems></CategoryItems></PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/allSellers',
                element: <AllSellers></AllSellers>
            },
        ]
    },
    {
        path: '/*',
        element: <BlankRoute></BlankRoute>
    }
])