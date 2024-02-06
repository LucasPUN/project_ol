import {Container, Typography} from "@mui/joy";
import questionText from "./QuestionText";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type UpdateColorValue = {
    color: string;
    updateColor: (newValue: string) => void;
}

type Props = {
    checked: boolean;
    colorValue: UpdateColorValue;
}

export default function QuestionRow({checked,colorValue}: Props) {

    return (
        <>
            <Container>
                    <Typography
                        sx={{
                            margin: '1vw',
                            padding: '1vw',
                            width: '40vw',
                            maxHeight: '60vh',
                            overflow: 'auto',
                            color : checked? colorValue.color : 'neutral'
                        }}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={questionText}/>
                    </Typography>
            </Container>
        </>
    );
}