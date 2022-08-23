import {Container, Nav, Navbar, Button} from "react-bootstrap";

export default function Header(){

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/todos">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/todos">To do</Nav.Link>
                    <Nav.Link href="./cards">cards</Nav.Link>
                    <Button variant="outline-light"
                            onClick={() => {
                                localStorage.clear();
                                window.location.reload();
                            }}
                    >Logout</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}