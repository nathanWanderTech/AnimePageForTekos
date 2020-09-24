import React, { useEffect, useState } from "react";
import { Grid, Button, Icon, Container } from "semantic-ui-react";
import AnimeItem from "../AnimeItem/AnimeItem";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import "./style.scss";
const AnimeList = () => {
  const [animeStateList, setAnimeStateList] = useState({
    list: [],
    currentPage: 1,
  });

  const [searchContent, setSearchContent] = useState("");

  const dispatch = useDispatch();

  const renderItem = () => {
    return animeStateList.list.map((item, index) => {
      return <AnimeItem key={index} item={item} />;
    });
  };

  const handleNext = () => {
    if (animeStateList.currentPage === 12) return;
    const nextPageUrl = `https://5f1d4ba039d95a0016953dce.mockapi.io/api/NguoiDung?page=${
      animeStateList.currentPage + 1
    }&limit=9`;
    Axios({
      method: "GET",
      url: nextPageUrl,
    })
      .then((res) => {
        setAnimeStateList({
          list: res.data,
          currentPage: animeStateList.currentPage + 1,
        });
      })
      .catch((err) => console.log(err));
  };

  const handlePrevious = () => {
    if (animeStateList.currentPage === 1) return;
    const prevPageUrl = `https://5f1d4ba039d95a0016953dce.mockapi.io/api/NguoiDung?page=${
      animeStateList.currentPage - 1
    }&limit=9`;
    Axios({
      method: "GET",
      url: prevPageUrl,
    })
      .then((res) => {
        setAnimeStateList({
          list: res.data,
          currentPage: animeStateList.currentPage + 1,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "https://5f1d4ba039d95a0016953dce.mockapi.io/api/NguoiDung?page=1&limit=9",
    })
      .then((res) => {
        console.log(res.data[0]);
        dispatch({
          type: "FETCH_LIST",
          payload: res.data,
        });
        setAnimeStateList({
          list: res.data,
          currentPage: 1,
        });
      })
      .catch((err) => console.log("loi", err));
  }, []);

  const handleOnChange = (event: any) => {
    setSearchContent(`${event.target.value}`);
    console.log(searchContent);
  };

  const handleSearch = () => {
    if (!searchContent) return;
    const searchUrl = `https://5f1d4ba039d95a0016953dce.mockapi.io/api/NguoiDung?search=${searchContent}`;
    Axios({
      method: "GET",
      url: searchUrl,
    })
      .then((res) => {
        console.log(res.data);
        if (!res.data.length) alert("Not Match Any");
        setAnimeStateList({
          list: res.data,
          currentPage: 1,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div className="nav">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            placeholder="Name..."
            className="search"
            onChange={(event) => {
              handleOnChange(event);
            }}
          />
          <Button
            content="Search"
            labelPosition="left"
            type="button"
            onClick={handleSearch}
          />
        </form>
      </div>
      <Grid columns={4}>
        <Grid.Row>{renderItem()}</Grid.Row>
      </Grid>
      <div className="pagination">
        <Button icon labelPosition="left" onClick={handlePrevious}>
          <Icon name="arrow left" />
          Prev
        </Button>
        <Button disabled={true}>{animeStateList.currentPage}</Button>

        <Button icon labelPosition="right" onClick={handleNext}>
          <Icon name="arrow right" />
          Next
        </Button>
      </div>
    </Container>
  );
};

export default AnimeList;
