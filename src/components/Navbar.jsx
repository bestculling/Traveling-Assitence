import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Index() {
    return (
        <Navbar expand="lg" className="bg-white">
            <Container>
                <Navbar.Brand href="#home"><h2>สถานที่ท่องเที่ยวยอดนิยมในประเทศไทย</h2></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Index