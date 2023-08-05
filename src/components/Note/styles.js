import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
    height: 22.2rem;
    padding: 3.2rem;
    margin-bottom: 2.4rem;
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
            
    h2 {
        font-size: 2.4rem;
        margin-bottom: .8rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
     }

    .stars {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 1.6rem;

    }


    P {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .description {
        margin-top: 1.5rem;
        height: 4.2rem;
        overflow-y: hidden;
    }

    .tags {
        display: flex;
        margin-top: 1.6rem;
        gap: .8rem;
    }

`;