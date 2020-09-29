import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image, Modal } from "semantic-ui-react";
import "./style.scss";

const ModalDetail = () => {
  const modalState = useSelector((state: any) => {
    return state.modalRReducer;
  });

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch({
      type: "CLOSE_MODAL_REVISED_VERSION",
      payload: {},
    });
  };

  return (
    <Modal open={modalState.isShowed}>
      <Modal.Header>{modalState.selectedAnime.title}</Modal.Header>
      <Modal.Content image>
        <Image size="huge" src={modalState.selectedAnime.image_url} wrapped />
        <Modal.Description>
          <div className="info">
            <p>
              <span className="bold">Type: </span>
              {modalState.selectedAnime.type}
            </p>
            <p>
              <span className="bold">Rated: </span>
              {modalState.selectedAnime.rated}
            </p>
            <p>
              <span className="bold">Episodes: </span>{" "}
              {modalState.selectedAnime.episodes}
            </p>
            <p>
              <span className="bold">Score: </span>
              {modalState.selectedAnime.score}
            </p>
          </div>
          <span className="bold">Description: </span>
          <p style={{ fontSize: 15 }}>{modalState.selectedAnime.synopsis}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Close"
          labelPosition="right"
          icon="window close outline"
          positive
          onClick={handleCloseModal}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalDetail;
