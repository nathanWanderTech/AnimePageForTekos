import React from "react";
import AnimeList from "../../Components/AnimeList/AnimeList";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PaginationComponent from "../../Components/Pagination/Pagination";
import Modal from "../../Components/Modal/Modal";
import "./style.scss";

const AnimeHomeR = () => {
  return (
    <>
      <Header />
      <AnimeList />
      <div className="pagination">
        <PaginationComponent />
      </div>
      <Footer />
      <Modal />
    </>
  );
};

export default AnimeHomeR;
