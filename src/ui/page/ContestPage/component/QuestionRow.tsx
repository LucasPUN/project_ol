import {Container, Typography} from "@mui/joy";
import questionText from "./QuestionText";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";


type Props = {
    checked: boolean;
}

export default function QuestionRow({checked}: Props) {
    return (
        <>
            <Container>
                {checked ? (
                    <Typography
                        sx={{
                            margin: '1vw',
                            padding: '1vw',
                            width: '40vw',
                            maxHeight: '60vh',
                            overflow: 'auto',
                            color : '#8AC453'
                        }}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={questionText}/>
                    </Typography>
                ) : (
                    <Typography
                        color="neutral"
                        sx={{
                            margin: '1vw',
                            padding: '1vw',
                            width: '40vw',
                            maxHeight: '60vh',
                            overflow: 'auto',
                        }}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={questionText}/>
                    </Typography>
                )}
            </Container>
        </>
    );
}