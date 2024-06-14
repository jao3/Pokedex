import styled from "styled-components";

interface ButtonActiveStyle {
    active?: boolean
}

export const PaginationContainer = styled.div`
    width: 100%;

    margin: 3rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const IconStyles = styled.button<ButtonActiveStyle>`
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg{
        width: 24px;
        height: 24px;
        color: ${(props) => props.active ? props.theme.colors.background.pressedInput : props.theme.colors.text.gray};

    }
`;

export const PageButton = styled.button<ButtonActiveStyle>`
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0 8px;
    border-radius: 6px;
    font-weight: bold;

    background-color: ${(props) => props.active ? props.theme.colors.background.pressedInput : props.theme.colors.background.input};
    color: ${(props) => props.active ? props.theme.colors.text.white : props.theme.colors.text.white};

    width: 40px;
    height: 40px;

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;