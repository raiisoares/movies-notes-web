import { Container } from "./styles"
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";



export function CreateMovie() {
    return(
        <Container>
            <Header/>
            <main>
            <ButtonText to="/" value={"Voltar"}/>
            <h1>Novo filme</h1>
            <div>
                <Input placeholder="Título"/>
                <Input placeholder="Sua nota (de 0 a 5)"/>
            </div>
            <TextArea placeholder="Observações"/>

            <section>
                <h2>Marcadores</h2>
                <div>
                    <NoteItem value="React" />
                    <NoteItem isNew placeholder="Novo marcador" />
                </div>
            </section>

            <div>
                <button>Excluir filme</button>
                <Button value={"Salvar alterações"}/>
            </div>
            </main>

        </Container>
    );
}