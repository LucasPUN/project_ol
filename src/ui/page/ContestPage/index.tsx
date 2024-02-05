import {Checkbox, Container} from "@mui/joy";
import QuestionRow from "./component/QuestionRow.tsx";
import AnswerRow from "./component/AnswerRow.tsx";
import TopNavBar from "../../component/TopNavBar.tsx";
import {useContext} from "react";
import {LoginUserContext} from "../../../App.tsx";


export default function ContestPage() {
    const loginUser = useContext(LoginUserContext);

    const RenderQuestion = () => (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            {Array.from({length: 3}).map((_, index) => (
                <div key={index}
                     style={{
                         display: 'flex',
                         flexDirection: 'row',
                         alignItems: 'center'
                     }}>
                    <QuestionRow/>
                    <AnswerRow index={index}/>
                    <Checkbox/>

                </div>
            ))}
        </div>
    );


    return (
        <>
            <TopNavBar/>
            <Container>
                <RenderQuestion/>
            </Container>
        </>
    )
}