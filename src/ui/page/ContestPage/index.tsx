import {Checkbox, Container} from "@mui/joy";
import QuestionRow from "./component/QuestionRow.tsx";
import AnswerRow from "./component/AnswerRow.tsx";
import TopNavBar from "../../component/TopNavBar.tsx";
import {useState} from "react";


type UpdateColorValue = {
    color: string;
    updateColor: (newValue: string) => void;
};

export default function ContestPage() {

    const [checkedStates, setCheckedStates] = useState<boolean[]>(Array.from({ length: 3 }, () => false));
    const [color,setColor] = useState<string>("neutral")



    const handleCheckboxChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = event.target.checked;
        setCheckedStates(newCheckedStates);
        setColor('#8AC453');
    };

    const updateColor = (newValue: string) => {
        setColor(newValue);
    };

    const colorValue: UpdateColorValue = {
        color,
        updateColor,
    };


    const RenderQuestion = () => (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            {Array.from({length: 3}).map((_, index:number) => (
                <div key={index}
                     style={{
                         display: 'flex',
                         flexDirection: 'row',
                         alignItems: 'center'
                     }}>
                    <QuestionRow checked={checkedStates[index]} colorValue={colorValue} />
                    <AnswerRow index={index}/>
                    <Checkbox checked={checkedStates[index]} onChange={handleCheckboxChange(index)} />
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