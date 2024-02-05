import ContestPage from "../ui/page/ContestPage";
import BarHorizontalStacked from "../ui/page/DashboardPage";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ContestPage/>,
    },
    {
        path: "/dashboard",
        element: <BarHorizontalStacked/>
    }
])