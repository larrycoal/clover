import styled from "styled-components";
import { colors } from "../../utils";

export const HeroContainer = styled.section`
  height: 100vh;
  background: ${colors.primary};
  color: ${colors.neutral};
  text-align: center;

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
  height:100%;
  font-size: .9rem;
  letter-spacing:1.5px;
  font-family:'Open Sans', sans-serif;
  padding-top: 2.875rem;

  > :last-child {
    width: 90%;
  }

  > span{
    font-size:1rem;
    font-weight:lighter
  }
  
  > * + * {
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
      margin-top: 0.5rem;
      /* height: 43.125rem; */
      height: 800px;
      background: ${colors.primary};
      color: ${colors.neutral};
      text-align: center;
    }}
`;


