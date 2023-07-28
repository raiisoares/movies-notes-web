import { Container, Brand, Profile, ImgProfile } from "./styles";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";

export function Header(){
    const {logout} = useAuth();

    return(
        <Container>
            <Brand>RocketMovies</Brand>
            <Input placeholder="Pesquisar pelo título" />
            <Profile >
                <div>
                    <strong>Raí Soares</strong>
                    <button onClick={logout}>Sair</button>
                </div>
            <ImgProfile to="/profile"><img src="https://www.github.com/raiisoares.png" alt="Foto do usuário"/></ImgProfile>   
            </Profile>
        </Container>
    );
}