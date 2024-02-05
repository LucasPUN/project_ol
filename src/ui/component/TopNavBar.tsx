import {AppBar} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";


export default function TopNavBar() {
    return (
        <>

            <AppBar
                position="sticky"
                style={{
                    backgroundColor: '#8AC453',
                    width: "100vw",
                    height: "10vh",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                <FontAwesomeIcon
                    icon={faCircleUser}
                    style={{
                        color: "#FFD43B",
                        alignItems: 'center'
                    }}
                    size="2xl"
                />

                <div
                style={{
                    marginLeft: 10
                }}>
                    UserName
                </div>

            </AppBar>
        </>
    )
}