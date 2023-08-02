import { useState } from "react";
import { api } from "../../services/api";
import { Container, Avatar, ProfileHeader, Form } from "./styles";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AiOutlineMail, AiFillLock, AiOutlineUser, AiOutlineCamera } from "react-icons/ai";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Profile() {
    const { user, userUpdate } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordNew, setPasswordNew] = useState("");
    const [passwordOld, setPasswordOld] = useState("");

    const handleUpdate = async (event) => {
        event.preventDefault();
        const updated = { name, email, password: passwordNew, old_password: passwordOld };
        const updatedUser = Object.assign(user, updated);
        await userUpdate({ user: updatedUser, avatarFile });
    }

    const handleChangeAvatar = (event) => {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imgPreview = URL.createObjectURL(file);
        setAvatar(imgPreview);
    }

    return (
        <Container>
            <ProfileHeader>
                <ButtonText to="/" value={"Voltar"} />
            </ProfileHeader>
            <Avatar>
                <img src={avatar} alt="Foto do usuário" />
                <label htmlFor="avatar">
                    <AiOutlineCamera />
                    <input onChange={handleChangeAvatar} id="avatar" type="file" />
                </label>
            </Avatar>

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