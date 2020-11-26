import React from "react";
import { Wrapper, Button, Stack } from "../../components";
import { InfoContainer } from "./InfoStyles";
import { youMatter, mentalPain } from "./data";

export const InfoVertical = ({
    headline,
    description,
    img,
    alt,
    buttonText,
    imageStart
}) => {
    return (
        <Wrapper>
            <InfoContainer imageStart={imageStart}>
                <Stack>
                    <h2>{headline}</h2>
                    <p>{description}</p>
                    {buttonText ? <Button primary>{buttonText}</Button>: null}
                </Stack>
                <div>
                    <img src={img} alt={alt} />
                </div>
            </InfoContainer>
        </Wrapper>
    );
};