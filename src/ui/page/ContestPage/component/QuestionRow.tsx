import {Container, Textarea} from "@mui/joy";
import questionText from "./QuestionText";

export default function QuestionRow(){
    return (
        <>
            <Container >
                <Textarea
                    color="neutral"
                    sx={{
                        margin: '1vw',
                        width: '40vw',
                        maxHeight: '25vw',
                        overflow: 'auto'
                    }}
                    value={questionText}
                />

            </Container>
        </>
    )
}