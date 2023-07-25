import styled from "styled-components";
import { COLORS, FONT_WEIGHTS } from "../utils/constants"

export const OptionsContainer = styled.div`
    display: inline-block;
    font-size: ${FONT_WEIGHTS.medium};

    ${(props) =>
        props.open &&
        `
        height: 57.5rem;
    
        h3 {
          color: white;
        }
    
        img {
          transform: rotateZ(180deg);
        }
    
        @media (max-width: 1200px) {
          height: 60rem;
        }
    
        @media (max-width: 1024px) {
          height: auto;
        }
    `}
`;

export const Option = styled.p`
    font-size: ${FONT_WEIGHTS.medium};
`;

export const OptionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const OptionUpArrow = styled.img`
    transition: transform 0.5s ease;

    @media (max-width: 600px) {
        width: 1.25rem;
    }
`;