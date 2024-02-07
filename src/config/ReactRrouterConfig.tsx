import ContestPage from "../ui/page/ContestPage";
import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../ui/page/LoginPage";
import DashboardPage from "../ui/page/DashboardPage";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/",
        element: <ContestPage/>,
    },
    {
        path: "/dashboard",
        element: <DashboardPage/>
    }
]
)