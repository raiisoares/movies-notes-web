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
        overflow-y: auto;
        padding: 4rem 12.3rem 8.5rem;

        >h1 {
            margin-top: 2.4rem;
        }

        >div {
            display: flex;
            align-items: center;
            gap: 4rem;
            margin: 4rem 0;
        }

        >section {
            margin: 4rem 0;
            
            >h2 {
            font-weight: 400;
            font-size: 2rem;
            line-height: 2.6rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100}
          }

            >div {
                display: flex;
                gap: 2.4rem;
                height: 8.8rem;
                padding: 1.6rem;
                margin-top: 2.4rem;
                border-radius: .8rem;
                background-color: ${({ theme }) => theme.COLORS.BLACK}
          }
        }

        >div{  
            button:nth-child(1) {
            width: 100%;
            height: 4.8rem;
            border: none;
            border-radius: 1rem;
            background-color: ${({ theme }) => theme.COLORS.BLACK};
            color: ${({ theme }) => theme.COLORS.PINK};
            }
        }
    }
  
`;