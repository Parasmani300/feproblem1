import React from 'react'
import {Navbar,Container,Nav,} from 'react-bootstrap'

export default function Navigation() {
    return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Al Falcone</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/mission">Mission</Nav.Link>
                    <Nav.Link href="/story">Story Line</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
  <br />

</>
    )
}
