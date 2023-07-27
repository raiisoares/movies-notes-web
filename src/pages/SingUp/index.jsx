import { useState } from "react";
import { api } from './../../services/api';
import { useNavigate } from "react-router-dom"
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineMail, AiFillLock, AiOutlineUser } from "react-icons/ai";

export function SingUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSingUp = (event) => {
        event.preventDefault();
        if (!name || !email || !password) return alert("Preencha todos os campos!");

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso.");
                navigate("/");
            })
            .catch(error => {
                if (error.response) alert(error.response.data.message);
                else alert("Não foi possível cadastrar!");
            });

    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Cire sua conta</h2>

                <Input type="text" placeholder="Nome" icon={AiOutlineUser} onChange={event => setName(event.target.value)} />
                <Input type="mail" placeholder="E-Mail" icon={AiOutlineMail} onChange={event => setEmail(event.target.value)} />
                <Input type="password" placeholder="Senha" icon={AiFillLock} onChange={event => setPassword(event.target.value)} />
                <Button value={"Cadastrar"} onClick={handleSingUp} />
                <ButtonText to="/" value={"Voltar para o login"} />
            </Form>

            <Background />
        </Container>
    );
}