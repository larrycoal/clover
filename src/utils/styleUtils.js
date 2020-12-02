import {css} from "styled-components";

export const visuallyHidden = css`
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(0,0,0,0);
    clip-path: inset(-50%);
`;