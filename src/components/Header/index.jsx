import { Container, Brand, Profile, ImgProfile } from "./styles";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header(){
    const {logout, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <Brand>RocketMovies</Brand>
            <Input placeholder="Pesquisar pelo título" />
            <Profile >
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={logout}>Sair</button>
                </div>
            <ImgProfile to="/profile"><img src={avatarUrl} alt={user.name}/></ImgProfile>   
            </Profile>
        </Container>
    );
}