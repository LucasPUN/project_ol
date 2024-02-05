import './App.css'
import {Container} from "@mui/joy";
import {RouterProvider} from "react-router-dom";
import {router} from "./config/ReactRrouterConfig.tsx";

function App() {


  return (
    <>
        <Container>
            <RouterProvider router={router}/>
        </Container>
    </>
  )
}

export default App
