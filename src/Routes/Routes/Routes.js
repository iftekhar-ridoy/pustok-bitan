import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import CategoryItems from "../../Pages/Home/Categories/CategoryItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";

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
                element: <CategoryItems></CategoryItems>,
                loader: async ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }
])