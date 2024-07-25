import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 30px 30px;
    
    @media (max-width: 1280px) {
        padding: 30px 20px
    }
    @media (max-width: 768px) {
        padding: 30px 5px;
    }
`;

export const CardContainer = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3.0rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 3.5rem;
        
    }
`;