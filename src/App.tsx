import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./config/ReactRrouterConfig.tsx";
import {createContext, useState} from "react";
import {UserData} from "./data/UserData.ts";

export const LoginUserContext = createContext<UserData | null | undefined>(undefined)

function App() {
    const Lucas: UserData = { email: "lucas@lucas.com" };
    const [loginUser, setLoginUser] = useState<UserData | null | undefined>(Lucas);


  return (
    <>
        <LoginUserContext.Provider value={loginUser}>
            <RouterProvider router={router}/>
        </LoginUserContext.Provider>
    </>
  )
}

export default App
