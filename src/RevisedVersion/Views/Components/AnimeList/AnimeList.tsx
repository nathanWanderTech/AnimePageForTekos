import React, { useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import AnimeItem from "../AnimeItem/AnimeItem";
import { apiCreator } from "../../../Models/apiCreator";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { IAnimeR } from "../../../Models/type";
import Filter from "../Filter/Filter";
import "./style.scss";

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
    <Container>
      <div className="title-block">
        <h2>ANIME</h2>
        <Filter />
      </div>

      <Grid container>
        <Grid.Row>{renderAnime()}</Grid.Row>
      </Grid>
    </Container>
  );
};

export default AnimeList;
