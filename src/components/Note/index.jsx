import { Container } from "./styles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Star } from "../Star";
import { Tag } from "../Tag";

export function Note({ data, ...rest }) {

    return (
        <Container  {...rest}>

            <h2>{data.title}</h2>
            
            <div className="stars">
                <Star rate={data.rating} />
            </div>

            <div className="description"><p>{data.description}</p></div>

            {data.tags &&
                <div className="tags">
                    {data.tags.map(tag => (<Tag key={String(tag.id)} value={tag.name} />))}
                </div>
            }
        </Container>
    );
}