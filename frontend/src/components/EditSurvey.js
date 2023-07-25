import React, { useState, useEffect } from 'react';
import * as sc from "../styled/scEditSurvey";
import NavBar from "./NavBar";
import EditQuestion from './EditQuestion';
import { surveys, questionBank } from '../utils/data';

const EditSurvey = ({ surveyID }) => {
    // get questions from database according to the course code.
    const survey = surveys[0];
    const questions = questionBank;
    const [editState, setEditState] = useState(
        new Array(questions.length).fill(false)
    );
    const [questionsState, setQuestionsState] = useState(questions);
    const [editing, setEditingState] = useState(false);

    // const [as, setAs] = useState(questions[0].choices);

    useEffect(() => {
        console.log(editState);
    });

    const handleEditState = (idx) => {
        console.log(idx);
        console.log(editState);
        let states = editState;
        states[idx] = true;
        setEditState(states);
        console.log(editState[idx]);
        console.log("noluyo amına koyim");
        // const updated = editState.map((item, index) => index === idx ? !item : item);
        // setEditState(editState);
        // console.log("")
    };

    const handleEdit = (newQuestion, idx) => {
        // console.log(event.target.value);
        let allQuestions = questionsState
        allQuestions[idx] = newQuestion;
        setQuestionsState(allQuestions);
    };

    return (
        <sc.PageWrapper>
            <NavBar/>
            <sc.EditSurveyWrapper>
                <sc.SurveyNameContainer>{survey.name}</sc.SurveyNameContainer>
                <sc.QuestionListWrapper>
                    {questions.map((question, index) => (
                        (question.choices !== '') ?
                        // question.choices !== "" ?
                        <sc.QuestionContainer>
                            <sc.QuestionBodyContainer>
                                {question.body}
                            </sc.QuestionBodyContainer>
                            <sc.QuestionChoicesContainer>
                                {question.choices.map((choice) => (
                                    
                                    <sc.QuestionChoice>
                                        <input type="checkbox" />
                                        <label>{choice}</label>
                                    </sc.QuestionChoice>
                                ))}
                            </sc.QuestionChoicesContainer>
                            <sc.SingleButtonContainer type='button' onClick={() => handleEditState(index)}>edit question</sc.SingleButtonContainer>
                            {editState[index] && <EditQuestion question={question} editState={editState} setEditState={setEditState} handleEdit={(newQuestion) => handleEdit(newQuestion, index)} idx={index} />}
                        </sc.QuestionContainer>
                        :
                        <sc.QuestionContainer>
                            <sc.QuestionBodyContainer>
                                {question.body}
                            </sc.QuestionBodyContainer>
                            <sc.QuestionChoicesContainer>
                                <sc.QuestionBodyBox type='text'></sc.QuestionBodyBox>
                            </sc.QuestionChoicesContainer>
                            <sc.SingleButtonContainer>edit question</sc.SingleButtonContainer>
                        </sc.QuestionContainer>
                    ))}
                </sc.QuestionListWrapper>
            </sc.EditSurveyWrapper>
        </sc.PageWrapper>
    );
};

export default EditSurvey;