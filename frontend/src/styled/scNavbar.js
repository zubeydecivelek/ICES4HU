import styled from "styled-components";
import { Button } from "./scMixins";
import { COLORS, FONT_WEIGHTS } from "../utils/constants"

export const NavBarWrapper = styled.div`
    background: ${COLORS.white};
    top: 0;
    left: 0;
    width: 100%;
    height: 0.8%;
`;

export const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    float: right;
    padding: 0.25rem;
`;

export const NavBarIcon = styled.a`
    padding-right: 1rem;

    ${Button}

    @media (max-width: 600px) {
        padding: 1.4rem 2.25rem;
    }

    ${(props) =>
    props.$disabledOnMobile &&
    `
        @media (max-width: 600px) {
        display: none;
        }
    `}
`;

export const IconsGroup = styled.div`
    display: flex;
    padding-left: 10px;
    justify-content: space-between;
`;

export const ButtonsGroup = styled.a`
    display: flex;
    align-items: center;
    gap: 1.75rem;
`;

export const User = styled.div`
    display: flex;
    gap: 1.75rem;
    position: relative;
`;

export const UserPhoto = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: auto;
`;

export const UserInfo = styled.div`
    font-size: ${FONT_WEIGHTS.regular};
    line-height: 3px;

`;

export const UserRow = styled.div`
    align-items: center;
    margin-bottom: 0.9rem;
`;

export const UserOptionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;