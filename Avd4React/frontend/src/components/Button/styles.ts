import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`

        background: #ff9000;
        height: 56px;
        border-radius: 10px;
        padding: 0 16px;
        color: white;
        width: 100%;
        font-weight: bold;
        margin-top: 16px;
        transition: background-color 0.2s;
        border: 2px solid black;

        &:hover {
            background: ${shade(0.2, '#ff9000')}
        }
`;