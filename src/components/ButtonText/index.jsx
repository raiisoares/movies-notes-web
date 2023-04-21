import { Container } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai"

export function ButtonText({value, ...rest}) {
   return(
   <Container {...rest}>
        <AiOutlineArrowLeft/>
        {value}
    </Container>
   );
}