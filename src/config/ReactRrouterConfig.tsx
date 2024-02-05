import ContestPage from "../ui/page/ContestPage";
import {createBrowserRouter} from "react-router-dom";
import DashboardPage from "../ui/page/DashboardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ContestPage/>,
    },
    {
        path: "/dashboard",
        element: <DashboardPage/>
    }
])