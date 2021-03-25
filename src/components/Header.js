import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const Header = ({ handleShow }) => {
  return (
    <header className="header">
      <Navbar fixed="top" variant="light" bg="white">
        <Container fluid="xl" className="px-lg-2 px-xl-0">
          <Navbar.Brand href="#home" className="font-weight-bold">
            Tsks<span>.</span>
          </Navbar.Brand>
          <Button variant="primary" className="py-2 px-4" onClick={handleShow}>
            Add task
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
