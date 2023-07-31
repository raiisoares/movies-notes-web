import { useState } from "react";
import { Container, ProfileHeader, Form } from "./styles";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AiOutlineMail, AiFillLock, AiOutlineUser, AiOutlineCamera } from "react-icons/ai";

export function Profile() {
    const { user, userUpdate } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordNew, setPasswordNew] = useState("");
    const [passwordOld, setPasswordOld] = useState("");

    const handleUpdate = async (event) => {
        event.preventDefault();
        const user = { name, email, password: passwordNew, old_password: passwordOld }
        await userUpdate({ user });
    }

    return (
        <Container>
            <ProfileHeader>
                <ButtonText to="/" value={"Voltar"} />
            </ProfileHeader>

            <div>
                <img src="https://www.github.com/raiisoares.png" alt="Foto do usuário" />
                <div>
                    <AiOutlineCamera />
                </div>
            </div>

            <Form>
                <Input type="text" value={name} placeholder="Nome" icon={AiOutlineUser} onChange={event => setName(event.target.value)} />
                <Input type="mail" value={email} placeholder="E-Mail" icon={AiOutlineMail} onChange={event => setEmail(event.target.value)} />
                <Input type="password" placeholder="Senha atual" icon={AiFillLock} onChange={event => setPasswordOld(event.target.value)} />
                <Input type="password" placeholder="Nova Senha" icon={AiFillLock} onChange={event => setPasswordNew(event.target.value)} />
                <Button onClick={handleUpdate} value={"Salvar"} />
            </Form>
        </Container>
    );
}