import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";
`;

export const Content = styled.div`
    grid-area: content;
    padding: 4.7rem 12.3rem 5.8rem;
    overflow-y: auto;
       
    >div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3.8rem;

        h1 {
            font-weight: 400;
        }

        a {
        width: 20.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: none;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BLACK};
        height: 4.8rem;

            svg {
                font-size: 1.6rem;
            }
        }
    }
`;
