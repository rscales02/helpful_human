import { FC } from "react";
import { Navbar, Col } from "react-bootstrap";

import Search from "./Search";
interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (props) => {
  return (
    <Navbar
      className="bg-dark d-inline-flex w-100 p-2 align-middle"
      expand="lg"
    >
      <Col className="d-flex justify-content-start">
        <Navbar.Brand href="#home">
          <img src="/logo-symbol.svg" alt="Logo" />
        </Navbar.Brand>
      </Col>
      <Col className="d-flex justify-content-end align-middle">
        <Search />
      </Col>
    </Navbar>
  );
};
