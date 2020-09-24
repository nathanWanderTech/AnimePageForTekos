import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image, Modal } from "semantic-ui-react";
import "./style.scss";

const ModalDetail = () => {
  const modalState = useSelector((state: any) => {
    return state.modalReducer;
  });

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
      payload: {},
    });
  };

  return (
    <Modal open={modalState.isShowed}>
      <Modal.Header>{modalState.selectedMovie.title}</Modal.Header>
      <Modal.Content image>
        <Image size="huge" src={modalState.selectedMovie.image_url} wrapped />
        <Modal.Description>
          <div className="info">
            <p>
              <span className="bold">Type: </span>
              {modalState.selectedMovie.type}
            </p>
            <p>
              <span className="bold">Rated: </span>
              {modalState.selectedMovie.rated}
            </p>
            <p>
              <span className="bold">Episodes: </span>{" "}
              {modalState.selectedMovie.episodes}
            </p>
            <p>
              <span className="bold">Score: </span>
              {modalState.selectedMovie.score}
            </p>
          </div>
          <p style={{ fontSize: 15 }}>{modalState.selectedMovie.synopsis}</p>
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
