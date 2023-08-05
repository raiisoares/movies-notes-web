import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Star({ rate, ...rest }) {

    let ratingValue = [];

    const ratingToArray = (value) => {

        for (let index = 1; index <= 5; index++) {
            if (index <= value) ratingValue.push(1);
            else ratingValue.push(0);
        }
    }

    ratingToArray(rate);

    const handleRating = (value) => {

        if (value === 1) return <AiFillStar key={String(Math.floor(Math.random() * 1000 + 1))}  />

        else return <AiOutlineStar key={String(Math.floor(Math.random() * 1000 + 1))}  />
    }

    return (
        <Container {...rest}>
            <div>{ratingValue.map(rating => handleRating(rating))} </div>
        </Container>
    );
}