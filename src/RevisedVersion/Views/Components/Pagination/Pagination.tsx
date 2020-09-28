import Axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Icon } from "semantic-ui-react";
import { apiCreator } from "../../../Models/apiCreator";

const PaginationComponent = () => {
  const pagination = useSelector(
    (state: any) => state.animeListReducer.pagination
  );

  const dispatch = useDispatch();
  return (
    <Pagination
      defaultActivePage={1}
      firstItem={null}
      lastItem={null}
      pointing
      totalPages={pagination.lastPage}
      prevItem={{ content: <Icon name="angle left" />, icon: true }}
      nextItem={{ content: <Icon name="angle right" />, icon: true }}
      onPageChange={(event, data) => {
        console.log(typeof data.activePage);

        Axios({
          method: "GET",
          url: apiCreator(data.activePage as number),
        })
          .then((res) => {
            dispatch({
              type: "GO_TO_PAGE",
              payload: { currentPage: data.activePage, data: res.data },
            });
          })
          .catch((err) => console.log(err));
      }}
    />
  );
};

export default PaginationComponent;
