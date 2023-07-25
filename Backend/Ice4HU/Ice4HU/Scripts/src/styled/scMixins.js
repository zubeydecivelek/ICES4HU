import { css } from "styled-components";
import { COLORS, FONT_WEIGHTS } from "../utils/constants";

export const Container = css`
  width: 85%;
  max-width: 110rem;
  margin: 0 auto;
`;

export const Button = css`
  color: white;
  padding: 1.6rem 1.5rem;
  border-radius: 50rem;
  font-size: 1.3rem;
  font-weight: ${FONT_WEIGHTS.medium};
  transition: transform 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;

  ${(props) =>
    props.$outline &&
    `
    color: ${COLORS.paleGray};
    border: 1px solid ${COLORS.paleGray};
  `}

  &:hover {
    transform: scale(1.05);
  }
`;