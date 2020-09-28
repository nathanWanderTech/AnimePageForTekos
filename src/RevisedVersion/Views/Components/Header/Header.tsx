import React from "react";
import { Container, Grid, Menu } from "semantic-ui-react";
import AnimeList from "../AnimeList/AnimeList";
import { Link } from "react-router-dom";

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
      </Menu>
    </Container>
  );
};

export default Header;
