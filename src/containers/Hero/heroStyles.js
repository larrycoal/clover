import styled from "styled-components";
import { colors } from "../../utils";

export const HeroContainer = styled.section`
  background: ${colors.primary};
  color: ${colors.neutral};
  text-align: center;
  font-size: 1rem;

  > :first-child {
    position: absolute;
    right: 0;
    top: 0;
  }

  > :nth-child(2) {
    position: absolute;
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 768px) {
    > :nth-child(2) {
        width: 10rem;
    }

    > :first-child {
        width: 10rem;
        top: -6.25rem;
        right: 0;
    }
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  letter-spacing:1.5px;
  padding-top: 2.875rem;

  > :last-child {
    width: 90%;
    height: 50%;
  }

  > span {
    font-weight:lighter
  }
  
  > * + * {
    margin-top: 1rem;
`;


