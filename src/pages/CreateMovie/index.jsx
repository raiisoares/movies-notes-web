import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles"
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";



export function CreateMovie() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const handleNewMovie = async (event) => {
        event.preventDefault();
        if (!title) return alert("Digite um titulo para sua nova MovieNote!");
        if (!rating) return alert("Você precisa adicionar uma nota!");
        if (newTag) return alert("Você deixou uma Tag no campo para adicionar tags, porém não clicou em adicionar! Clique para adicionar ou deixe o campo vazio.");

        await api.post("/notes", { title, description, rating, tags });
        alert("Nota criada com sucesso.");
        navigate("/");
    }

    const handleAddTag = (event) => {
        event.preventDefault();
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    const handleRemoveTag = (deleted) => {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }


    return (
        <Container>
            <Header />
            <main>
                <ButtonText to="/" value={"Voltar"} />
                <h1>Novo filme</h1>
                <div>
                    <Input placeholder="Título" onChange={event => setTitle(event.target.value)} />
                    <Input placeholder="Sua nota (de 0 a 5)" onChange={event => setRating(event.target.value)} />
                </div>
                <TextArea placeholder="Observações" onChange={event => setDescription(event.target.value)} />

                <section>
                    <h2>Marcadores</h2>
                    <div>
                        {tags.map((tag, index) => (
                            < NoteItem key={String(index)} value={tag} onClick={() => { handleRemoveTag(tag) }} />
                        ))}
                        <NoteItem isNew value={newTag} placeholder="Novo marcador" onChange={event => setNewTag(event.target.value)} onClick={handleAddTag} />
                    </div>
                </section>

                <div>
                    <button>Excluir filme</button>
                    <Button value={"Salvar alterações"} onClick={handleNewMovie} />
                </div>
            </main>

        </Container>
    );
}