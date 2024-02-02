import {Container, Textarea} from "@mui/joy";

export default function QuestionRow(){
    return (
        <>
            <Container>
                <Textarea
                    color="neutral"
                    disabled
                    minRows={2}
                    size="lg"
                    style={{
                        margin: '1vw',
                        width: '40vw',
                        height: '25vw' }}
                    value="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                            You may assume that each input would have exactly one solution, and you may not use the same element twice.
                            You can return the answer in any order."
                >
                </Textarea>
            </Container>
        </>
    )
}