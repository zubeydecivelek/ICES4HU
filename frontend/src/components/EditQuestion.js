import React, { useState, useEffect } from 'react';
import questionBank from "../utils/data";
import * as sc from "../styled/scEditSurvey";
import NavBar from "./NavBar";
import CloseIcon from '@mui/icons-material/Close';

const EditQuestion = ({ question, editState, setEditState, handleEdit, idx }) => {
    const [questionState, setQuestionState] = useState(question.body);
    const [answer, setAnswer] = useState(question.choices);

    const handleQuestionEdit = (event) => {
        setQuestionState(event.target.value);
    };

    const handleChoiceEdit = (event, index) => {
        let choices = [...answer];
        choices[index] = event.target.value;
        setAnswer(choices);
    };

    useEffect(() => {
        console.log("in here");
        console.log("");
    });

    const handleSubmit = () => {
        const newQuestion = {
            "question-body": questionState,
            "choices": answer
        };

        handleEdit(newQuestion);

        let states = editState;
        states[idx] = false;
        setEditState(states);
    };

    return (
        editState[idx] && (<sc.QuestionBodyContainer>
            {(question.choices !== '') ?
                // question.choices !== "" ?
                <sc.QuestionContainer>
                    <sc.EditContainer type="text"  onChange={handleQuestionEdit} />
                    <sc.QuestionChoicesContainer>
                        {question.choices.map((choice, index) => (
                            
                            <sc.QuestionChoice>
                                <input type="checkbox" />
                                <label>
                                    <sc.EditContainer type="text" value={choice} onChange={(event) => handleChoiceEdit(event, index)} />
                                </label>
                            </sc.QuestionChoice>
                        ))}
                    </sc.QuestionChoicesContainer>
                    <sc.SingleButtonContainer onClick={handleSubmit}>save question</sc.SingleButtonContainer>
                </sc.QuestionContainer>
                :
                <sc.QuestionContainer>
                    <sc.EditContainer type="text" value={question.body} onChange={handleQuestionEdit}/>
                    <sc.QuestionChoicesContainer>
                        <sc.QuestionBodyBox type='text'></sc.QuestionBodyBox>
                    </sc.QuestionChoicesContainer>
                    <sc.SingleButtonContainer onClick={handleSubmit}>save question</sc.SingleButtonContainer>
                </sc.QuestionContainer>}
        </sc.QuestionBodyContainer>)
    );
};

export default EditQuestion;