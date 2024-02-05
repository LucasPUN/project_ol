import {Container, Textarea} from "@mui/joy";
import {useState} from "react";

type Props = {
    index: number;
}

export default function AnswerRow({index}: Props) {
    const [textareaValue, setTextareaValue] = useState<string>("")

    const handleTextareaValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
    }

    return (
        <>
            <Container>
                <Textarea
                    color="neutral"
                    placeholder={`QUESTION ${index + 1}`}
                    style={{
                        margin: '1vw',
                        width: '40vw',
                        height: '60vh' }}
                    value={textareaValue}
                    onChange={handleTextareaValueChange}
                />
            </Container>
        </>
    )
}