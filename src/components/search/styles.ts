import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px 0 50px;
    width: 100%;
    //height: 60px;
    padding: 80px 20px;
    display: flex;
    border-radius: 0.5rem;
    transition: 0.4s;

    svg{
        width: 30px;
        height: 30px;
        color: ${({ theme }) => theme.colors.text.white};
    }
`;
export const InputText = styled.input`
    flex: 1;
    background: none;
    font-size: 18px;
    padding: 1rem;
    border: 0.13rem solid #1E1E1E;
    border-radius: 0 0.5rem 0.5rem 0;
    font-weight: 400;
    outline: none;
    background: ${({ theme }) => theme.colors.background.input};


    &::placeholder {
        color: rgba(255, 255, 255, 0.25);
    }
`;
export const SearchButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 0.5rem 0 0 0.5rem;
    background: ${({ theme }) => theme.colors.background.input};
`;