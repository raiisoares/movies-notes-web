import { Container, Brand, Profile } from "./styles";
import { Input } from "../Input";

export function Header(){
    return(
        <Container>
            <Brand>RocketMovies</Brand>
            <Input placeholder="Pesquisar pelo título" />
            <Profile to="/profile">
                <div>
                    <strong>Raí Soares</strong>
                    <span>Sair</span>
                </div>
                <img src="https://www.github.com/raiisoares.png" alt="Foto do usuário"/>
            </Profile>
        </Container>
    );
}