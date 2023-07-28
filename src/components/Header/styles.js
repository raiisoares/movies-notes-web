import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from './../Button/index';
import { useEffect } from 'react';

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    width: 100%;
    height: 10.6rem;
    padding: 2.4rem 12.3rem;
    gap: 6.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    >div {
        display: flex;
        min-width: fit-content;
        flex-direction: column;
        align-items: end;
        margin-right: 1rem;

        >strong{
            font-size: 1.4rem;
            line-height: 1.8rem;
        }

        >Button {
            font-size: 1.4rem;
            line-height: 1.8rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            border: none;
            background-color: transparent;
            cursor: pointer;
        }
    }`;

export const ImgProfile = styled(Link)`
    img{
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
    }`;

