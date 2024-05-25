import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AddRecipe from "../pages/Dashboard/AddRecipe";
import ManageRecipe from "../pages/Dashboard/ManageRecipe";
import Profile from "../pages/Dashboard/Profile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/recipes`)
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
                path: '/dashboard',
                element: (<DashboardLayout></DashboardLayout>),
                children: [
                    {
                        index: true,
                        element: <DashboardHome></DashboardHome>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/add-recipe',
                        element: <AddRecipe></AddRecipe>
                    },
                    {
                        path: '/dashboard/manage-recipe',
                        element: <ManageRecipe></ManageRecipe>
                    }
                ]
            }
        ]
    }
])

export default router;