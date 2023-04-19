import { Container } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai"

export function ButtonText({value}) {
   return(
   <Container>
        <AiOutlineArrowLeft/>
        {value}
    </Container>
   );
}