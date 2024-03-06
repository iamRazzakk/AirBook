import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Home/Home";



const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default myCreatedRouter;