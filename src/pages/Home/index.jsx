import { AiOutlinePlus } from "react-icons/ai"
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

export function Home(){
    return(
        <Container>
           <Header />
            <Content>
                <div>
                    <h1>Meus filmes</h1>
                    <button><AiOutlinePlus/> Adicionar filme</button>
                </div>
                <Note title={"Interstellar"} />
                <Note title={"Interstellar"} />
                <Note title={"Interstellar"} />
                <Note title={"Interstellar"} />
                <Note title={"Interstellar"} />
                <Note title={"Interstellar"} />

            </Content>
        </Container>
    );
}