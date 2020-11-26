import React from "react";
import { Stack, Wrapper } from "../../components";
import { data } from "./data";
import { JoinUsCard, JoinUsContainer } from "./joinUsStyles";


export const JoinUs = () => {
    return (
        <Wrapper>
            <JoinUsContainer>
                <h2>Why you should <span>join us</span></h2>
                <JoinUsCard>
                    {data.map(data => {
                        const { alt, img, headline, description } = data;

                        return (
                            <Stack key={data.alt}>
                                <img src={img} alt={alt} />
                                <h3>{headline}</h3>
                                <p>{description}</p>
                            </Stack>
                        );
                    })}
                </JoinUsCard>
            </JoinUsContainer>
        </Wrapper>
    );
};