import React from "react";
import { Stack, Button, Wrapper } from "../../components";
import { VolunteerContainer } from "./volunteerStyles";

export const Volunteer = () => {
    return (
        <Wrapper>
            <VolunteerContainer>
                <Stack>
                    <h4>
                        Are you a Mental health specialist?
                        Would you like to volunteer?
                    </h4>
                    <p>Join our team of mental specialist and heroes and help others at your comfort</p>
                    <Button primary>Volunteer</Button>
                </Stack>
            </VolunteerContainer>
        </Wrapper>
    );
};