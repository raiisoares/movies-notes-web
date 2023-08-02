import { Container } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Star } from "../../components/Star";
import { Tag } from "../../components/Tag";
import { AiOutlineClockCircle, AiFillStar } from "react-icons/ai"
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";


export function MoviePreview() {
    const [data, setData] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }
        fetchNote();
    }, []);

    return (
        <Container>
            <Header />
            { data &&
                <main>
                    <span><AiFillStar /></span>
                    <ButtonText to="/" value={"Voltar"} />

                    <div>
                        <h1>{data.title}</h1>
                        <Star />
                    </div>

                    <div>
                        <img src={avatarUrl} alt={user.name} />
                        <p>Por {user.name}</p>

                        <p><AiOutlineClockCircle />{data.created_at}</p>
                    </div>

                    {data.tags &&
                        <div>
                            {data.tags.map(tag => (<Tag key={String(tag.id)} value={tag.name} />))}
                        </div>
                    }

                    <p>{data.description}</p>
                </main>
            }
        </Container>
    );
}