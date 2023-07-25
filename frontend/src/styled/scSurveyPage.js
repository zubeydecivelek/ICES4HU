import { Table, TableContainer, Button } from "@mui/material";
import styled from "styled-components";
import { COLORS, FONT_WEIGHTS } from "../utils/constants";

export const PageWrapper = styled.div`
    display: grid;
`;

export const SurveyPageWrapper = styled.div`
    background-color: ${COLORS.lilac};
`;

export const SurveyList = styled.div`
    display: grid;
    align-self: center;
    margin-top: 3%;
    margin-right: 8%;
    margin-left: 8%;
`;

export const SurveyTable = styled.table`
    align-self: center;
    margin-top: 3%;
    margin-right: 8%;
    margin-left: 8%;
    background-color: ${COLORS.lilac};
`;

export const SurveyColumn = styled.th`
    text-align: center;
`;

export const SurveyRowContainer = styled.tr``;

export const SurveyRow = styled.td` 
    text-align: center;
`;

// export const RowContainer = styled.div`
//     display: flex;
//     align-self: center;
//     justify-content: space-between;
// `;

export const DeleteImage = styled.image``;

export const ChooseSurveyButton = styled.button``;

// export const InfoContainer = styled.div`
//     display: inline-block;
// `;