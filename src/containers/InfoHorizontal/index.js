import React from "react";
import { Wrapper, Stack, Button } from "../../components";
import { InfoContainer } from "./infoStyles";

export const InfoHorizontal = ({
    headline,
    description,
    buttonText,
    img,
    imageStart,
    alt
}) => {
    return (
        <Wrapper>
            <InfoContainer imageStart={imageStart}>
                <Stack>
                    <h2>{headline}</h2>
                    <p>{description}</p>
                    {buttonText ? <Button primary>{buttonText}</Button> : null}
                </Stack>
                <div>
                    <img src={img} alt={alt} />
                </div>
            </InfoContainer>
        </Wrapper>
    );
};