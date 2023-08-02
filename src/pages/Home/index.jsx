import { AiOutlinePlus } from "react-icons/ai"
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";


export function Home(){
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);
   
    const handlePreview = (id) => {
        navigate(`/preview/${id}`);
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }

        fetchNotes();

    }, [search]);
   
    return(
        <Container>
           <Header value={search} onChange={event => setSearch(event.target.value)}/>
            <Content>
                <div>
                    <h1>Meus filmes</h1>
                    <Link to="/new"><AiOutlinePlus/> Adicionar filme</Link>
                </div>
                {notes.map(note => (<Note key={String(note.id)} data={note} onClick={() => handlePreview(note.id)} />))}

            </Content>
        </Container>
    );
}