import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`

        background: white;
        border-radius: 10px;
        border: 2px solid black;
        padding: 16px;
        width: 100%;
        color: black;

        display: flex;
        align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${(props) => props.isErrored
        && css`
            border-color: #c53030;
        `}

    ${(props) => props.isFilled
        && css`
            color: #ff9000;
        `}

    ${(props) => props.isFocused
        && css`
            color: #ff9000;
            border-color: #ff9000;
        `}

    input{
        flex: 1;
        background: transparent;
        border: 0;
        color: black;

        &::placeholder {
            color: black;
        }

        & + input {
            margin-top: 8px;
        }
    }

    svg {
            margin-right: 16px;
        }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg{
        margin: 0;
    }

    span {
        background: #c53030;
        color: #FFF;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`