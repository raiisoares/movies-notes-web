import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    >div:nth-child(2) {
        width: 18.6rem;
        height: 18.6rem;
        margin: -9.3rem auto 0;
        position: relative;

        >img {
            width: 18.6rem;
            height: 18.6rem;
            border-radius: 50%;
        }

    }

`;

export const ProfileHeader = styled.div`
    height: 14.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Form = styled.form`
    width: 34rem;
    margin: 6.4rem auto 0;

    > div:nth-child(3){
            margin-top: 2.4rem;
        }

    > Button {
        margin-top: 2.4rem;
    }

`;

export const Avatar = styled.div`
        position: relative;
        margin: -12.4rem auto 3.2rem;
        width: 18.6rem;
        height: 18.6rem;
       
        >img{
            width: 18.6rem;
            height: 18.6rem;
            border-radius: 50%;
        }

        >label {
            width: 4.8rem;
            height: 4.8rem;
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: .7rem;
            right: .7rem;
            cursor: pointer;

            input {
                display: none;
            }

            svg {
                width: 2rem;
                height: 2rem;
                color: ${({ theme }) => theme.COLORS.GRAY_200};
            }
        }
`;