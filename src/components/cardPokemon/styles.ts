import styled from 'styled-components'

interface BoxProps {
    color: string;
}

export const Container = styled.div<BoxProps>`
    position: relative;
    display: flex;
    height: 180px;
    width: inherit;
    border-radius: 6px;
    box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
    background: ${props => props.color};
    cursor: pointer;

    >img {
        position: absolute;
        right: 0px;
        top: -50px;
        z-index: 10;
        height: 210px;
        width: 210px;
        transition: all ease 0.4s;
    }
    &:hover {
        border-radius: 15px;
        > img{
            top: -45px;
        }
    }
    @media (max-width: 1280px) {
        
    }
    @media (max-width: 468px) {
            /* min-width: auto;
            padding: 1.6rem;
            margin: 1rem 0.5rem;
            max-width: calc(100vw - 4rem); */
        >img{
            height: 150px;
            width: 150px;
            top: 0;
        }
        
    }
`;

export const PokemonName = styled.span`
    font-size: 40px;
    font-weight: bold;
    line-height: 45px;
    text-transform: capitalize;
`;

export const PokemonCard = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    position: relative;
    padding-left: 30px;
    overflow: hidden;
    
    .pokeball {

        position: absolute;
        right: 0px;
        top: 0;
        height: 230px;
        width: 230px;
        transform: rotate(-25deg);
        
        path {
            fill: rgba(255, 255, 255, 0.4)
        }
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 5px;
    }
`;
export const PokemonNumber = styled.span`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${({theme}) => theme.colors.text.number}
`;

export const PokemonType = styled.div<BoxProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    border-radius: 3px;
    background: ${props => props.color};

    & + div {
        margin-left: 10px;
    }

    svg {
        width: 20px;
        height: 20px;
        path {
            fill: ${({ theme }) => theme.colors.text.white};
        }
    }

    span {
        margin-left: 5px;
        font-size: 18px;
        font-weight: 500;
        line-height: 14px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.text.white};
    }
`;