import { AiOutlinePlus } from "react-icons/ai"
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <Container>
           <Header />
            <Content>
                <div>
                    <h1>Meus filmes</h1>
                    <Link to="/new"><AiOutlinePlus/> Adicionar filme</Link>
                </div>
                <Note to="/preview/2" title={"Interstellar"} />
                <Note to="/preview/2" title={"Interstellar"} />
                <Note to="/preview/2" title={"Interstellar"} />
                <Note to="/preview/2" title={"Interstellar"} />
                <Note to="/preview/2" title={"Interstellar"} />
                <Note to="/preview/2" title={"Interstellar"} />
            </Content>
        </Container>
    );
}