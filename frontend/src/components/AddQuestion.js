import React, { useState, useEffect } from 'react';
import questionBank from "../utils/data";
import * as sc from "../styled/scCreateSurvey";
import NavBar from "./NavBar";
import CloseIcon from '@mui/icons-material/Close';

const AddQuestionPopUp = ({ questionBank, addQuestionPopUpOpen, setAddQuestionPopUpOpen, onQuestionsAdded }) => {
    const [checked, setChecked] = useState(
        new Array(questionBank.length).fill(false)
    );
    const [addQuestion, setAddQuestion] = useState(false);
    const closePopUp = () => setAddQuestionPopUpOpen(false);

    const handleChecked = (idx) => {
        const updated = checked.map((item, index) => index === idx ? !item : item);
        setChecked(updated);
    };

    useEffect(() => {
        console.log(checked);
    });

    const getAllAddedQuestions = () => {
        let added = [];

        for(let i = 0; i < checked.length; i++) {
            if (checked[i]) {
                added.push(questionBank[i]);
            }
        }
        
        onQuestionsAdded(added);
        setAddQuestionPopUpOpen(false);
    };

    return(
        addQuestionPopUpOpen && (
            <sc.CreateSurveyWrapper>
                <sc.PopUpCloseButton onClick={closePopUp}>
                    <sc.PopUpCloseButtonImage src={CloseIcon} />
                </sc.PopUpCloseButton>
                <sc.QuestionListWrapper>
                    {questionBank.map((question, index) => (
                        <sc.QuestionContainer>
                            <sc.QuestionBodyContainer>
                                {question.body}
                            </sc.QuestionBodyContainer>
                            <sc.ChooseButton>
                                <input type="checkbox" onChange={() => handleChecked(index)} />
                            </sc.ChooseButton>
                            <sc.QuestionChoicesContainer>
                                {question.choices.map((choice) => (
                                    <sc.QuestionChoice>
                                        <input type="checkbox" />
                                        <label>{choice}</label>
                                    </sc.QuestionChoice>
                                ))}
                            </sc.QuestionChoicesContainer>
                            
                        </sc.QuestionContainer>
                    ))}
                </sc.QuestionListWrapper>
                <sc.SingleButtonContainer type='button' onClick={() => setAddQuestion(true)}>Add All</sc.SingleButtonContainer>
                {addQuestion && getAllAddedQuestions()}
            </sc.CreateSurveyWrapper>
        )
    );
}

export default AddQuestionPopUp;