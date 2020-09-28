import React, { useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import AnimeItem from "../AnimeItem/AnimeItem";
import { apiCreator } from "../../../Models/apiCreator";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { IAnimeR } from "../../../Models/type";

const AnimeList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "GET",
      url: apiCreator(1),
    })
      .then((res) => {
        dispatch({
          type: "SET_ANIMELIST",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const animeList = useSelector((state: any) => {
    return state.animeListReducer.animeList;
  });

  const renderAnime = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return animeList.map((anime: IAnimeR, index: number) => {
      return <AnimeItem anime={anime} key={index} />;
    });
  };

  return (
    <>
      <Container>
        <h2>ANIME</h2>
      </Container>
      <Grid container>
        <Grid.Row>{renderAnime()}</Grid.Row>
      </Grid>
    </>
  );
};

export default AnimeList;
