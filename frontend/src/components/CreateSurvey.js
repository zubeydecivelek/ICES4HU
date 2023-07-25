import React, { useState, useEffect } from 'react';
import questionBank from "../utils/data";
import * as sc from "../styled/scCreateSurvey";
import NavBar from "./NavBar";
import SendIcon from '@mui/icons-material/Send';
import AddQuestion from "./AddQuestion";
import CreateNewQuestion from './CreateNewQuestion';

const CreateSurvey = ({ questionBank, questions1 }) => {
    // const [questions, questionsData] = useState([]);
    const [addQuestionPopUpOpen, setAddQuestionPopUpOpen] = useState(false);
    const [newQuestionPopUpOpen, setNewQuestionPopUpOpen] = useState(false);
    
    // questions = questionBank;

    const [questions, setQuestions] = useState(questionBank);

    const handleQuestionsAdded = (newQuestion) => {
        console.log("here3");
        console.log(questions);
        console.log(newQuestion);
        setQuestions(questions.concat(newQuestion));
    };

    useEffect(() => {
        
    });

    return (
        <sc.PageWrapper>
            <NavBar />
            <sc.CreateSurveyWrapper>
                <sc.SurveyNameContainer>BBM384 Survey</sc.SurveyNameContainer>
                <sc.QuestionListWrapper>

                    {questions.map((question) => (
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
                        </sc.QuestionContainer>
                        :
                        <sc.QuestionContainer>
                            <sc.QuestionBodyContainer>
                                {question.body}
                            </sc.QuestionBodyContainer>
                            <sc.QuestionChoicesContainer>
                                <sc.QuestionBodyBox type='text'></sc.QuestionBodyBox>
                            </sc.QuestionChoicesContainer>
                        </sc.QuestionContainer>
                    ))}
                </sc.QuestionListWrapper>
                <sc.ButtonsContainer>
                    <sc.SingleButtonContainer onClick={() => setAddQuestionPopUpOpen(true)}>Add question</sc.SingleButtonContainer>
                    <sc.SingleButtonContainer onClick={() => setNewQuestionPopUpOpen(true)}>Create New Question</sc.SingleButtonContainer>
                    <sc.SingleButtonContainer>Save All</sc.SingleButtonContainer>
                    <sc.SingleButtonContainer>Submit</sc.SingleButtonContainer>
                </sc.ButtonsContainer>
            </sc.CreateSurveyWrapper>
            {addQuestionPopUpOpen && <AddQuestion questionBank={[...questions]} addQuestionPopUpOpen={addQuestionPopUpOpen} setAddQuestionPopUpOpen={setAddQuestionPopUpOpen} onQuestionsAdded={handleQuestionsAdded} />}
            {newQuestionPopUpOpen && < CreateNewQuestion newQuestionPopUpOpen={newQuestionPopUpOpen} setNewQuestionPopUpOpen={setNewQuestionPopUpOpen} onQuestionsAdded={handleQuestionsAdded} />}
        </sc.PageWrapper>
    );
};

export default CreateSurvey;