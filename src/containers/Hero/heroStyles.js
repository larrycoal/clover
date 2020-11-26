import styled from "styled-components";
import { colors } from "../../utils";

export const HeroContainer = styled.section`
  height: 100vh;
  background: ${colors.primary};
  color: ${colors.neutral};
  text-align: center;
  > :nth-child(1) {
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
        width:10rem;
        transform:rotate(0deg)
    }
    > :nth-child(1) {
        width:10rem;
        transform:rotate(-14deg);
        top:-100px;
        right:13px;
        overflow:hidden
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
    

