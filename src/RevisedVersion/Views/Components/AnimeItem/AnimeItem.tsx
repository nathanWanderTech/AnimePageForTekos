import React from "react";
import { Grid, Image, Card, Icon } from "semantic-ui-react";
import "./style.scss";
import { IAnimeR } from "../../../Models/type";
import { useDispatch } from "react-redux";

interface Props {
  anime: IAnimeR;
}

const AnimeItem: React.FC<Props> = (Props) => {
  const {
    image_url,
    title,
    synopsis,
    type,
    episodes,
    score,
    rated,
  } = Props.anime;

  const dispatch = useDispatch();

  const handleViewDetail = (selectedItem: IAnimeR) => {
    dispatch({
      type: "VIEW_DETAIL_REVISED_VERSION",
      payload: selectedItem,
    });
  };

  return (
    <Grid.Column mobile={8} tablet={4} computer={4} className="animeItem">
      <Card
        onClick={() => {
          handleViewDetail(Props.anime);
        }}
      >
        <Image src={image_url} height="270px" />
        <Card.Content>
          <Card.Header size="tiny">{title.substring(0, 10)}...</Card.Header>
          <Card.Meta>
            {type} - {rated}
          </Card.Meta>
          <Card.Description>{synopsis.substring(0, 20)}...</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="eye" />
          {episodes}
          <Icon name="star" />
          {score}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default AnimeItem;
