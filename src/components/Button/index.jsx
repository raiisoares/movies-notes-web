import { Container } from "./styles";

export function Button({value, ...rest}) {
   return(
   <Container {...rest}>
        {value}
    </Container>
   );
}
