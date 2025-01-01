import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import ErrorPage from "../Components/ErrorPage";
import Marathons from "../Components/Marathons";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddMarathon from "../pages/AddMarathon/AddMarathon";
import MyApplyList from "../pages/MyApplyList/MyApplyList";
import MyMarathonList from "../pages/Marathons/MyMarathonList";
import MarathonDitails from "../pages/MarathonDitails/MarathonDitails";
import MarathonRegister from "../pages/MarathonRegister/MarathonRegister";

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
            },
            {
                path:'/marathons',
                element: (
                    <PrivateRoute>
                        <Marathons></Marathons>
                    </PrivateRoute>
                ) ,
            },
            {
                path:'/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                ) ,
            },
            {
                path:'/marathonDitails/:id',
                element: (
                    <PrivateRoute>
                        <MarathonDitails></MarathonDitails>
                    </PrivateRoute>
                ) ,
                loader: ({ params }) =>fetch(
                    `${import.meta.env.VITE_API_URL}/marathon/${params.id}`),
            },
            {
                path:'/marathon-register/:marathonId',
                element: (
                    <PrivateRoute>
                        <MarathonRegister></MarathonRegister>
                    </PrivateRoute>
                ) ,
                loader: ({ params }) =>fetch(
                    `${import.meta.env.VITE_API_URL}/marathon/${params.marathonId}`),
            },
            {
                path:'/dashboard/add-marathon',
                element: (
                    <PrivateRoute>
                        <AddMarathon></AddMarathon>
                    </PrivateRoute>
                ) ,
            },
            {
                path:'/dashboard/my-marathon-list/:email',
                element: (
                    <PrivateRoute>
                        <MyMarathonList></MyMarathonList>
                    </PrivateRoute>
                ) ,
                loader: ({ params }) =>fetch(
                    `${import.meta.env.VITE_API_URL}/marathons/${params.email}`),
            },
            {
                path:'/dashboard/my-apply/:email',
                element: (
                    <PrivateRoute>
                        <MyApplyList></MyApplyList>
                    </PrivateRoute>
                ) ,
                loader: ({ params }) =>fetch(
                    `${import.meta.env.VITE_API_URL}/marathons-register/${params.email}`),
            },
        ]
    },
]);

export default router;