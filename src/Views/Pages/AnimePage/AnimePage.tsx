import React from "react";
import { Container, Header } from "semantic-ui-react";
import AnimeList from "../../Components/AnimeList/AnimeList";
import ModalDetail from "../../Components/Modal/Modal";

const AnimePage = () => {
  return (
    <div>
      <Container textAlign="center">
        <Header as="h1" color="orange">
          KONBANWA ANIME
        </Header>

        <Container textAlign="center">
          <AnimeList />
        </Container>
      </Container>
      <ModalDetail />
    </div>
  );
};

export default AnimePage;
