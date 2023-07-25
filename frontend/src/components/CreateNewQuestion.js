import React, { useState, useEffect, useRef } from 'react';
import questionBank from "../utils/data";
import * as sc from "../styled/scCreateSurvey";
import NavBar from "./NavBar";
import CloseIcon from '@mui/icons-material/Close';

const CreateNewQuestion = ({ newQuestionPopUpOpen, setNewQuestionPopUpOpen, onQuestionsAdded }) => {
    const closePopUp = () => setNewQuestionPopUpOpen(false);
    const [multichoice, setMultichoice] = useState(false);
    const [textType, setTextType] = useState(false);
    const [questionBody, setQuestionBody] = useState();
    const [multichoiceAnswers, setMultichoiceAnswers] = useState([]);
    const [addQuestion, setAddQuestion] = useState(false);
    const choiceRef = useRef(null);
    const questionRef = useRef(null);

    const handleQuestionBody = () => {
        if(questionRef.current.value !== '') {
            setQuestionBody(questionRef.current.value);
        } 
    };

    const handleChoiceClick = () => {
        // console.log("here2");
        // console.log(choiceRef.current.value);
        if(choiceRef.current.value !== '') {
            setMultichoiceAnswers([...multichoiceAnswers, choiceRef.current.value]);
        } 
    };

    useEffect(() => {
        console.log(questionBody);
    });

    const addTextAnswer = () => {
        return (
            <sc.QuestionBodyBox type='text'></sc.QuestionBodyBox>
        );
    };

    const CreateCheckbox = (labels) => {
        return (
            <sc.QuestionChoicesContainer id="container">
                {labels.map((label) => (
                    <sc.QuestionChoice>
                        <input type="checkbox" />
                        <label>{label}</label>
                    </sc.QuestionChoice>
                ))}
            </sc.QuestionChoicesContainer>
        );
    };

    const addMultichoiceAnswer = () => {
        return (
            <sc.QuestionListWrapper>
                <sc.QuestionBodyBox type='text' ref={choiceRef}/>
                <sc.SingleButtonContainer type='button' onClick={handleChoiceClick}>add</sc.SingleButtonContainer>
                <sc.QuestionChoicesContainer id="container">
                    {CreateCheckbox(multichoiceAnswers)}
                </sc.QuestionChoicesContainer>
            </sc.QuestionListWrapper>
        );
    };

    const createWholeQuestion = () => {
        let newQuestion = {
            body: questionBody,
            choices: "",
        };

        if(multichoice === true) {
            newQuestion["choices"] = multichoiceAnswers;
        } 
        
        onQuestionsAdded(newQuestion);
        setNewQuestionPopUpOpen(false);
    };

    return (
        newQuestionPopUpOpen && (
            <sc.CreateSurveyWrapper>
                <sc.PopUpCloseButton onClick={closePopUp}>
                    <sc.PopUpCloseButtonImage src={CloseIcon} />
                </sc.PopUpCloseButton>
                <sc.QuestionBodyBox type="text" ref={questionRef}></sc.QuestionBodyBox>
                <sc.SingleButtonContainer type='button' onClick={handleQuestionBody}>add body</sc.SingleButtonContainer>
                <sc.AnswerType onClick={() => setMultichoice(true)}>Multichoice</sc.AnswerType>
                <sc.AnswerType onClick={() => setTextType(true)}>Text Field</sc.AnswerType>
                {textType && addTextAnswer()}
                {multichoice && addMultichoiceAnswer()}
                <sc.SingleButtonContainer type='button' onClick={() => setAddQuestion(true)}>add new question</sc.SingleButtonContainer>
                {addQuestion && createWholeQuestion()}
            </sc.CreateSurveyWrapper>
        )
    );
};

export default CreateNewQuestion;