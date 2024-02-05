import {Container, Typography} from "@mui/joy";
import questionText from "./QuestionText";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function QuestionRow(){
    return (
        <>
            <Container >
                <Typography
                    color="neutral"
                    sx={{
                        margin: '1vw',
                        padding: '1vw',
                        width: '40vw',
                        maxHeight: '60vh',
                        overflow: 'auto',
                    }}>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={questionText} />
                </Typography>

            </Container>
        </>
    )
}