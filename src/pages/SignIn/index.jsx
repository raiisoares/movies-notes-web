import { useContext } from "react";
import { MyContext } from "../../myContext";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

export function SignIn() {

    const data = useContext(MyContext);
    console.log(data);

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input type="mail" placeholder="E-Mail" icon={AiOutlineMail} />
                <Input type="password" placeholder="Senha" icon={AiFillLock} />
                <Button value={"Entrar"}/>
                <Link to="/register">Criar conta</Link>
            </Form>

            <Background/>
        </Container>
    );
}