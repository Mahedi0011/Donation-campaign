

import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Component/LayOut/LayOut";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Home from "../Component/Home/Home";
// import Donations from "../Component/Pages/Donations/Donations";
import Donner from "../Component/Pages/Donner/Donner";
import Donations from "../Component/Pages/Donations/Donations";
import Statistics from "../Component/Pages/statistics/Statistics";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
            path:"/donner/:id",
            loader: () => fetch('data.json'),        
            element:<Donner></Donner>
            },
            {
            path:"/donations",
            loader: () => fetch('data.json'),        
            element:<Donations></Donations>
            },
            {
            path:"/statistics",               
            element:<Statistics></Statistics>
            }
        ]
    },
]);

export default router;