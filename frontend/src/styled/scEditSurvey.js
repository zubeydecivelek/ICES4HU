import { Table, TableContainer, Button } from "@mui/material";
import styled from "styled-components";
import { COLORS, FONT_WEIGHTS } from "../utils/constants";

export const PageWrapper = styled.div`
    display: grid;
`;

export const EditSurveyWrapper = styled.div`
    align-items: center;
    background-color: ${COLORS.lilac};
    height: auto;
`;

export const SurveyNameContainer = styled.h1`
    color: ${COLORS.black};
    font-size: 20px;
`;

export const QuestionListWrapper = styled.div`

`;

export const QuestionContainer = styled.div`
    display: grid;
    
`;

export const QuestionBodyContainer= styled.div`

`;

export const QuestionChoicesContainer = styled.div`
    display: inline-block;
`;

export const EditContainer = styled.input`
    display: inline-block;
`;

export const QuestionChoice = styled.div`
    display: inline-block;
`;

export const TickBox = styled.input`
`;

export const ButtonsContainer = styled.div`
    
`;

export const SingleButtonContainer = styled.button`
    background-color: "black";
`;

export const AddQuestionPopUpWrapper = styled.div``;

export const PopUpCloseButton = styled.button``;

export const PopUpCloseButtonImage = styled.img``;

export const ChooseButton = styled.button``;

export const QuestionBodyBox = styled.input``;

export const AnswerType = styled.button``; 