import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { searchApiCreator } from "../../../Models/apiCreator";
import "./style.scss";
import Axios from "axios";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchContent, setSearchContent] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      action=""
      onSubmit={(event: any) => {
        event.preventDefault();
        const apiLink = searchApiCreator(searchContent);
        console.log(apiLink);
        Axios({
          method: "GET",
          url: apiLink,
        })
          .then((res) => {
            console.log(res.data);
            dispatch({
              type: "SET_ANIMELIST",
              payload: res.data,
            });
          })
          .catch((err) => console.log(err));
      }}
    >
      <Input
        icon="search"
        placeholder="Search mail..."
        onChange={(event, data) => {
          setSearchContent(data.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
