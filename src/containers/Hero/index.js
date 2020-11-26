import React from "react";
import { Wrapper, Button } from "../../components";
import { HeroContainer, HeroContent } from "./heroStyles";
import { People } from "../../assets";

export const Hero = () => {
    return (
        <HeroContainer>
            <Wrapper>
                <HeroContent>
                    <h1>Have a conversation, <br/> rest your mind</h1>
                    <p>
                        Nigeria has the highest caseload of people with mental health issues and also ranks 15th
                        in the world in the frequency of suicide according to the World Health Organization.
                        KIJIE gives you the opportunity to express your feelings to a skilled professional
                    </p>
                    <Button>Get Help</Button>
                    <People />
                </HeroContent>
            </Wrapper>
        </HeroContainer>
    );
};