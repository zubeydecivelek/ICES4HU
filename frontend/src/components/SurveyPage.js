import React, { useState, useEffect } from 'react';
import * as sc from "../styled/scSurveyPage";
import NavBar from "./NavBar";
import DeleteIcon from '@mui/icons-material/Delete';

const SurveyPage = ({ surveys }) => {
    return (
        <sc.PageWrapper>
            <NavBar/>
            <sc.SurveyTable>
                <sc.SurveyRowContainer>
                    <sc.SurveyColumn>Course Name</sc.SurveyColumn>
                    <sc.SurveyColumn>Course Code</sc.SurveyColumn>
                    <sc.SurveyColumn>Instructor</sc.SurveyColumn>
                    <sc.SurveyColumn>Option</sc.SurveyColumn>
                </sc.SurveyRowContainer>
                {surveys.map(survey => (
                    <sc.SurveyRowContainer>
                        <sc.SurveyRow>{survey.name}</sc.SurveyRow>
                        <sc.SurveyRow>{survey.code}</sc.SurveyRow>
                        <sc.SurveyRow>{survey.instructor}</sc.SurveyRow>
                        <sc.SurveyRow>
                            <sc.DeleteImage> <DeleteIcon style={{color: "black"}} /></sc.DeleteImage>
                            <sc.ChooseSurveyButton>edit survey</sc.ChooseSurveyButton>
                        </sc.SurveyRow>
                    </sc.SurveyRowContainer>
                ))}
            </sc.SurveyTable>
        </sc.PageWrapper>
    );
};

export default SurveyPage;