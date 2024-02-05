import {AppBar, Toolbar} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";


export default function TopNavBar(){
    return (
        <>

            <AppBar
                position="sticky"
                style={{
                    backgroundColor: '#8AC453',
                    width: "98.7vw",
                    height: "10vh"
            }}

            >
                <Toolbar
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <div>
                        <FontAwesomeIcon
                            icon={faCircleUser}
                            style={{
                                color: "#FFD43B"
                            }}
                            size="2xl"
                        />
                    </div>
                    <div
                        style={{
                            marginLeft: "10px"
                        }}
                    >
                        UserName
                    </div>

                </Toolbar>
            </AppBar>
        </>
    )
}