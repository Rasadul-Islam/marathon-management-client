import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/register',
                element: <Register></Register> ,
            },
            {
                path:'/login',
                element: <LogIn></LogIn> ,
            }
        ]
    },
]);

export default router;