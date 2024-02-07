import {AppBar} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";


export default function TopNavBar() {
    const navigate = useNavigate();

    return (
        <>
            <AppBar
                position="sticky"
                style={{
                    backgroundColor: '#8AC453',
                    width: "98.7vw",
                    height: "10vh",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-between"
                }}>
                <div/>

                <div>
                    <FontAwesomeIcon
                        icon={faCircleUser}
                        style={{
                            color: "#FFD43B",
                            alignItems: 'center'
                        }}
                        size="2xl"
                    />


                    UserName
                </div>

                <Link to="/login">
                <Button variant="contained" color="success"
                sx={{
                    marginRight: "20px"
                }}>
                    Login
                </Button>
                </Link>

            </AppBar>


        </>
    )
}