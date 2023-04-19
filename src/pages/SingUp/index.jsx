import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineMail, AiFillLock, AiOutlineUser } from "react-icons/ai";

export function SingUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Cire sua conta</h2>

                <Input type="text" placeholder="Nome" icon={AiOutlineUser} />
                <Input type="mail" placeholder="E-Mail" icon={AiOutlineMail} />
                <Input type="password" placeholder="Senha" icon={AiFillLock} />
                <Button value={"Cadastrar"}/>
                <ButtonText value={"Voltar para o login"}/>  
            </Form>

            <Background/>
        </Container>
    );
}