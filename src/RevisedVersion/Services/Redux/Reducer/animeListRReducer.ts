let initialState = {
  animeList: [],
  pagination: {
    lastPage: null,
    currentPage: null,
  },
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_ANIMELIST":
      return {
        ...state,
        animeList: payload.results,
        pagination: {
          lastPage: payload.last_page,
          currentPage: 1,
        },
      };
    case "GO_TO_PAGE":
      return {
        ...state,
        animeList: payload.data.results,
        pagination: {
          lastPage: payload.data.last_page,
          currentPage: payload.currentPage,
        },
      };

    default:
      return state;
  }
};

export default reducer;
