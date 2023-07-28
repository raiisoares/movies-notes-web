import { useState } from 'react';
import { useAuth } from "../../hooks/auth";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    const handleSingIn = (event) => {
        event.preventDefault();
        signIn({ email, password });
    } 

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input type="mail" placeholder="E-Mail" icon={AiOutlineMail} onChange={event => setEmail(event.target.value)} />
                <Input type="password" placeholder="Senha" icon={AiFillLock} onChange={event => setPassword(event.target.value)}/>
                <Button onClick={handleSingIn} value={"Entrar"}/>
                <Link to="/register">Criar conta</Link>
            </Form>

            <Background/>
        </Container>
    );
}