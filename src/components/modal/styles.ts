import styled from "styled-components";

interface ElementColorProps {
    color: string
}

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3000;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    
    overflow-y: scroll;

    .close-icon{
        display: block;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: absolute;
        top: 10px;
        left: 10px;
        color: ${({theme}) => theme.colors.background.pressedInput};
        
        text-align: center;
        svg{
            font-size: 30px;
        }
    }

    &::-webkit-scrollbar {
        width: 12px;
    }
    &::-webkit-scrollbar-track {
    background: #060b28;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.background.pressedInput};
    border-radius: 0.5rem;
    border: 0.25rem solid #060b28;
  }
`;

export const ModalContainer = styled.div`
    backdrop-filter: blur(20px);
    border-radius: 1.5rem;
    position: relative;
    display: grid;
    grid-template-columns: 32.75rem 3.5rem 34.75rem;
    justify-content: center;
    align-items: end;
    //opacity: 0;
    transform: scale(0.8);
    margin: 30px;
    svg{
        cursor: pointer;
        width: 1.1875rem;
        height: 1.1875rem;
    }
    @media (max-width: 1280px){
        width: 100%;
        grid-template-columns: 1fr;
        flex-direction: column;
        margin: 50rem 1rem 7rem;
        transform: none;
    }
    @media (max-width: 480px){
        margin: 20rem 1rem 7rem;
    }

`;

export const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2.5rem;

    .types{
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 3px;
        margin-top: 10px;
    }
    img{
        width: 410px;
        height: 410px;
        position: absolute;
        top: -9.58rem;
        left: 6.5rem;
        
    }
    @media (max-width: 1280px) {
        margin-top: 150px;
        img{
            transform: translateX(-50%);
            top: -200px;
            left: 50%;
            position: absolute;
        }         
  }
  @media (max-width: 480px) {
    margin-top: 50px;
    padding: 1px;
    img{
        width: 310px;
        height: 310px;
        
    }
  }
`;

export const PokeNumber = styled.span`
    font-weight: 700;
    font-size: 25px;
    line-height: 115%;
    letter-spacing: 2px;
    color: ${({theme}) => theme.colors.text.white} 99;
`;
export const PokeName = styled.span`
    font-weight: bold;
    font-size: 40px;
    line-height: 65px;
    text-transform: capitalize;
    display: block;
    margin: 0.25rem 0.5rem 0.75rem;
`;

export const PokeType = styled.div<ElementColorProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    border-radius: 3px;
    background-color: ${props => props.color};

    & + div{
        margin-left: 10px;
    }
    
    svg{
        width: 20px;
        height: 20px;
        path{
            fill: ${({theme}) => theme.colors.text.white}
        }
    }

    span {
        margin-left: 5px;
        font-size: 18px;
        font-weight: 500;
        line-height: 14px;
        text-transform: capitalize;
        color: ${({theme}) => theme.colors.text.white};
    }
`;

export const Divider = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    svg{
        width: 3.5rem;
        height: 3.5rem;
    }
    &::before,&::after{
        content: "";
        display: block;
        width: 1px;
        height: 12.75rem;
        background: rgba(255,255,255, 0.55);
        margin: 0 auto;
    }
    @media (max-width: 1280px){
        flex-direction: row;
        align-items: center;

    svg {
      width: 3rem;
      height: 3rem;
    }

    &::before,
    &::after {
      width: 100%;
      height: 1px;
    }

    svg {
      flex-shrink: 0;
    }
    }
    @media (max-width: 62.5rem) {
    flex-direction: row;
    align-items: center;

    svg {
      width: 3rem;
      height: 3rem;
    }

    &::before,
    &::after {
      width: 100%;
      height: 1px;
    }

    svg {
      flex-shrink: 0;
    }
  }
`;
export const PokemonFeatures = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;

    svg{
        width: 1.5rem;
        height: 1.5rem;
    }
`;
export const PokemonWeight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        span{
            font-weight: 700;
        }
    }
    span{
        font-size: 1.25rem;
        line-height: 150%;
        font-weight: 400;
    }
`;
export const PokemonHeight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        span{
            font-weight: 700;
        }
    }
    span{
        font-size: 1.25rem;
        line-height: 150%;
        font-weight: 400;
    }
    
`;

