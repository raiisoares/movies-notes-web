import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    >main {
        grid-area: content;
        padding: 4rem 14.7rem 15.6rem;
        overflow-y: auto;

        >button {
            margin-top: 6rem;
        }

        >span {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        div {
            display: flex;
            align-items: center;
        }

        >div:nth-child(3){
            gap: 2rem;
            margin: 2.4rem 0;
            align-items: center;
            h1 {
                font-weight: 500;
                font-size: 3.6rem;
                line-height: 4.7rem;
            }

            div {
                gap: 1rem;
                font-size: 2rem;
            }
        }

        >div:nth-child(4){
            gap: .8rem;
            align-items: center;

            p {
                display: flex;
                align-items: center;
            }
            
            img {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
            }

            svg {
                font-size: 1.8rem;
                color: ${({ theme }) => theme.COLORS.PINK};
                margin-right: .8rem;
            }
        }

        >div:nth-child(5){
            gap: .8rem;
            align-items: center;
            margin: 4rem 0;
            
            >span {
                line-height: 1.7rem;
                height: 3rem;
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            }

        }

    }
`;