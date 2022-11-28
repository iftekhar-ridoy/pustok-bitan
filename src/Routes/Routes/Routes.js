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
import Profile from "../../Pages/Profile/Profile";
import AddProduct from "../../Pages/Seller/AddProduct/AddProduct";
import MyProducts from "../../Pages/Seller/MyProducts/MyProducts";
import BlankRoute from "../../Shared/BlankRoute/BlankRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../AdminRoute/SellerRoute/SellerRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
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
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: '/*',
        element: <BlankRoute></BlankRoute>
    }
])