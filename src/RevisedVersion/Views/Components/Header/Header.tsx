import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./style.scss";

const Header = () => {
  return (
    <Menu size="large" style={{ background: "#bdfff340" }} className="navMenu">
      <Link to="/Home" style={{ textDecoration: "none" }}>
        <Menu.Item name="home" />
      </Link>
      <Menu.Item name="Top" />
      <Link to="/AnimeHomeR">
        <Menu.Item name="anime" />
      </Link>
      <Menu.Item name="manga" />
      <Menu.Item name="">
        <SearchBar />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
