import React from "react";
import { Wrapper, Stack } from "../../components";
import { FaqContainer } from "./faqStyles";
import { ReactComponent as FaqImage } from "../../assets/faq.svg";
import { data } from "./data";

export const Faq = () => {
    return (
        <Wrapper>
            <FaqContainer>
                <FaqImage />
                <Stack>
                    {data.map(data => {
                        return (
                            <li key={data.answer}>
                                <img src={data.img} alt="Help"/>
                                <div>
                                    <h4>{data.question}</h4>
                                    <p>{data.answer}</p>
                                </div>
                            </li>
                        );
                    })}
                </Stack>
            </FaqContainer>
        </Wrapper>
    );
};