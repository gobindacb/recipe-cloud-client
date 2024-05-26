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
import UpdateRecipe from "../pages/Dashboard/UpdateRecipe";
import RecipeDetails from "../pages/RecipeDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import AllRecipe from "../pages/AllRecipe";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/all-recipes',
                element: <AllRecipe></AllRecipe>
            },
            {
                path: '/details/:id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => fetch (`${import.meta.env.VITE_API_URL}/recipe/${params.id}`)
            },
            {
                path: '/dashboard',
                element: (<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>),
                errorElement: <ErrorPage></ErrorPage>,
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
                    },
                    {
                        path:'/dashboard/update/:id',
                        element: <UpdateRecipe></UpdateRecipe>,
                        loader: ({params}) => fetch (`${import.meta.env.VITE_API_URL}/recipe/${params.id}`)
                    }
                ]
            }
        ]
    }
])

export default router;