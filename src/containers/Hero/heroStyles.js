import styled from "styled-components";
import { colors } from "../../utils";

export const HeroContainer = styled.section`
    /* height: 43.125rem; */
    height: 800px;
    background: ${colors.primary};
    color: ${colors.neutral};
    text-align: center;
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    font-size: 1.3125rem;
    padding-top: 2.875rem;

    

    > * + * {
        margin-top: 1rem;
        
        @media screen and (max-width: 768px) {
            margin-top: 0.5rem;
        }


    }

    @media screen and (max-width: 768px) {
        padding-top: 3.5rem;

        > :last-child {
            width: 100%;
            height: 100%;


        }
    }
`;