import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #121214;
        color:#e1e1e6;
        font-family: 'Montserrat', sans-serif;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    button {
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .button {
        background: linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%);
        border: 1px solid #24293f;
        border-radius: 0.5rem;
        padding: 0.75rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        
        font-size: 1rem;
        line-height: 150%;
        font-weight: 700;
        color: #ffffff;
    }
`;