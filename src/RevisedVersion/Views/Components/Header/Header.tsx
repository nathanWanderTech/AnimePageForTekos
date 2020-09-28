import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <Container fluid={true}>
      <Menu size="large" style={{ background: "#bdfff340" }}>
        <Link to="/Home" style={{ textDecoration: "none" }}>
          <Menu.Item name="home" />
        </Link>
        <Menu.Item name="Top" />
        <Link to="/">
          <Menu.Item name="anime" />
        </Link>
        <Menu.Item name="manga" />
        <Menu.Item name="">
          <SearchBar />
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default Header;
