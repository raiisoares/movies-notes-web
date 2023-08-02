import { Container, Brand, Profile, ImgProfile } from "./styles";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Header(){
    const navigate = useNavigate();
    const {logout, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const handleLogout = () => {
        navigate("/");
        logout();
    }

    return(
        <Container>
            <Brand>RocketMovies</Brand>
            <Input placeholder="Pesquisar pelo título" />
            <Profile >
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={handleLogout}>Sair</button>
                </div>
            <ImgProfile to="/profile"><img src={avatarUrl} alt={user.name}/></ImgProfile>   
            </Profile>
        </Container>
    );
}