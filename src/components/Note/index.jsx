import { Container } from "./styles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Star } from "../Star";
import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>

            <Star />

            <div>{data.description}</div>

            { data.tags &&
                <div>
                    {data.tags.map(tag => (<Tag key={String(tag.id)} value={tag.name} />))}
                </div>
            }
        </Container>
    );
}