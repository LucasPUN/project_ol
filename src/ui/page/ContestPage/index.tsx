import {Checkbox, Container} from "@mui/joy";
import QuestionRow from "./component/QuestionRow.tsx";
import AnswerRow from "./component/AnswerRow.tsx";
import TopNavBar from "../../component/TopNavBar.tsx";


export default function ContestPage(){

    const RenderQuestion = () => (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}>

            {Array.from({ length: 3 }).map((_, index) => (
                <Container key={index}
                           style={{
                               display: 'flex',
                               flexDirection: 'row',
                               alignItems: 'center' }}>
                    <QuestionRow />
                    <AnswerRow index={index} />
                    <Container>
                        <Checkbox/>
                    </Container>
                </Container>
            ))}
        </div>
    );



    return(
        <>
            <TopNavBar/>
            <RenderQuestion/>
        </>
    )
}