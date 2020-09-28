import React from "react";
import { Container, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <div>
        <Container textAlign="center">
          <Header size="huge" color="purple">
            Choose site to visit
          </Header>
          <ul className="button-list">
            <li>
              <Button color="youtube" size="huge">
                <Link to="/AnimePage" style={{ color: "white" }}>
                  3-hour Version
                </Link>
              </Button>
            </li>
            <li>
              <Button color="facebook" size="huge">
                <Link to="/AnimeHomeR" style={{ color: "white" }}>
                  Revised Version
                </Link>
              </Button>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default Home;
