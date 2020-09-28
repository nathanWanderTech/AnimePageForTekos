import React from "react";
import { Container, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Container textAlign="center">
        <Header size="huge" color="purple">
          Huge Header
        </Header>
        <Button color="youtube" size="huge">
          <Link to="/AnimePage" style={{ color: "white" }}>
            3-hour Version
          </Link>
        </Button>
        <Button color="facebook" size="huge">
          <Link to="/AnimeHomeR" style={{ color: "white" }}>
            Revised Version
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default Home;
