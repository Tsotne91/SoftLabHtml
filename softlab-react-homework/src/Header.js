import {Container, Nav, Navbar} from "react-bootstrap";

export default function Header(){

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/todos">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/todos">To do</Nav.Link>
                    <Nav.Link href="./cards">cards</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}