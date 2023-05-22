import { Container } from "react-bootstrap";

function ContentWrapper({ children }) {
    return <Container fluid>
        <Container fluid='xl'>{children}</Container>
    </Container>
}

export default ContentWrapper;