import { AiOutlinePlus } from "react-icons/ai"
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";


export function Home() {
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    const handlePreview = (id, event) => {
        event.preventDefault();
        navigate(`/preview/${id}`);
    }


    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }

        fetchNotes();

    }, [search]);

    return (
        <Container>
            <Header value={search} onChange={event => setSearch(event.target.value)} />
            <Content>
                <div>
                    <h1>Meus filmes</h1>
                    <Link to="/new"><AiOutlinePlus /> Adicionar filme</Link>
                </div>
                {notes &&
                    notes.map(note => (<Note key={String(note.id)} data={note} onClick={(event) => handlePreview(note.id, event)} />))
                }

            </Content>
        </Container>
    );
}