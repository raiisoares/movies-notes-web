import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

export function SingIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input type="mail" placeholder="E-Mail" icon={AiOutlineMail} />
                <Input type="password" placeholder="Senha" icon={AiFillLock} />
                <Button value={"Entrar"}/>
                <a href="#">Criar conta</a>
            </Form>

            <Background/>
        </Container>
    );
}