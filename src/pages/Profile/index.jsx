import { Container, ProfileHeader, Form } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AiOutlineMail, AiFillLock, AiOutlineUser, AiOutlineCamera } from "react-icons/ai";

export function Profile() {
    return(
        <Container>
            <ProfileHeader>
                <ButtonText to="/" value={"Voltar"}/>
            </ProfileHeader>

            <div>
                <img src="https://www.github.com/raiisoares.png" alt="Foto do usuário"/>
                <div>
                    <AiOutlineCamera/>
                </div>
            </div>

            <Form>
                <Input type="text" placeholder="Nome" icon={AiOutlineUser} />
                <Input type="mail" placeholder="E-Mail" icon={AiOutlineMail} />
                <Input type="password" placeholder="Senha atual" icon={AiFillLock} />
                <Input type="password" placeholder="Nova Senha" icon={AiFillLock} />
                <Button value={"Salvar"}/>
            </Form>
        </Container>
    );
}