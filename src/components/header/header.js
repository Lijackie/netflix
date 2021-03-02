import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import './header.scss';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Netflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link   href="#home">首頁</Nav.Link>
            <Nav.Link href="#link">節目</Nav.Link>
            <Nav.Link href="#home">電影</Nav.Link>
            <Nav.Link href="#link">最新熱門影片</Nav.Link>
            <Nav.Link href="#link">我的片單</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
