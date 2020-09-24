import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Card, Image, Button, Icon } from "semantic-ui-react";
import { IAnime } from "../../../Models/type";
import "./style.scss";

interface Props {
  item: IAnime;
}

const AnimeItem: React.FC<Props> = (Props) => {
  const { rated, title, image_url, synopsis, type } = Props.item;

  const dispatch = useDispatch();

  const handleViewDetail = (selectedItem: IAnime) => {
    dispatch({
      type: "VIEW_DETAIL",
      payload: selectedItem,
    });
  };

  return (
    <div className="cardItem">
      <Grid.Column>
        <Card
          onClick={() => {
            handleViewDetail(Props.item);
          }}
        >
          <Image src={image_url} height="250px" />
          <Card.Content>
            <Card.Header>{title.substring(0, 20)}</Card.Header>
            <Card.Meta>
              <span className="date">
                {rated}-{type}
              </span>
            </Card.Meta>
            <Card.Description>
              {synopsis.substring(0, 70) + "..."}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button as="div" labelPosition="right">
              <Button basic color="blue">
                <Icon name="info" />
                View Detail
              </Button>
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
};
export default AnimeItem;
