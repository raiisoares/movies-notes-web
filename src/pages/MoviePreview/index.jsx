import { Container } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Star } from "../../components/Star";
import { Tag } from "../../components/Tag";
import { AiOutlineClockCircle, AiFillStar } from "react-icons/ai"
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";


export function MoviePreview() {
    const params = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            console.log(response.data);
            setData(response.data);
        }
        fetchNote();
    }, []);

    return (
        <Container>
            <Header />
            <main>
                <span><AiFillStar /></span>
                <ButtonText to="/" value={"Voltar"} />

                <div>
                    <h1>{data.title}</h1>
                    <Star />
                </div>

                <div>
                    <img src={user.avatar} alt={user.name} />
                    <p>por {user.name}</p>

                    <p><AiOutlineClockCircle /> { }</p>
                </div>

                {data.tags &&
                    <div>
                        {data.tags.map(tag => (<Tag value={"Ficção Científica"} />))}
                    </div>
                }

                <p>{data.description}</p>
            </main>
        </Container>
    );
}