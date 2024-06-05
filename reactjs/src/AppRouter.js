import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./HomePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,

    },
    {
        path: "/filmSearch",
        element: <HomePage />,

    },

])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter;