import React from "react";
import { Wrapper, Button } from "../../components";
import { HeroContainer, HeroContent } from "./heroStyles";
import { People,Stroke,Bob } from "../../assets";

export const Hero = () => {
    return (
        <HeroContainer>
            <Stroke/>
            <Bob/>
            <Wrapper>
                <HeroContent>
                    <h1>Have a conversation, rest your mind</h1>
                    <span>
                        Nigeria has the highest caseload of people with mental health issues and also ranks 15th
                        in the world in the frequency of suicide according to the World Health Organization.
                        KIJIE gives you the opportunity to express your feelings to a skilled professional
                    </span>
                    <Button>Get Help</Button>
                    <People />
                </HeroContent>
            </Wrapper>
        </HeroContainer>
    );
};