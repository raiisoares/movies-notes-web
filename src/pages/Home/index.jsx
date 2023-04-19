import { Container, Content } from "./styles";
import { Header } from "../../components/Header";

export function Home(){
    return(
        <Container>
           <Header />
            <Content>
                <div>
                    <h1>Meus filmes</h1>
                </div>
            </Content>
        </Container>
    );
}