import {Container, Textarea} from "@mui/joy";

type Props = {
    index: number;
}

export default function AnswerRow({index}: Props) {
    return (
        <>
            <Container>
                <Textarea
                    color="neutral"
                    placeholder={`QUESTION ${index + 1}`}
                    style={{
                        margin: '1vw',
                        width: '40vw',
                        height: '25vw' }}
                />
            </Container>
        </>
    )
}