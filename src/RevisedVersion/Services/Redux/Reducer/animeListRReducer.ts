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
    case "SORT_Ascending":
      let tempAsc = [...state.animeList];
      tempAsc.sort((a: any, b: any) => {
        const lowerA = a.title.toLowerCase();
        const lowerB = b.title.toLowerCase();
        if (lowerA < lowerB) {
          return -1;
        }
        if (lowerA > lowerB) {
          return 1;
        }
        return 0;
      });
      return { ...state, animeList: tempAsc };

    case "SORT_Descending":
      let tempDesc = [...state.animeList];
      tempDesc.sort((a: any, b: any) => {
        const lowerA = a.title.toLowerCase().replace(/\s/g, "");
        const lowerB = b.title.toLowerCase().replace(/\s/g, "");
        if (lowerA < lowerB) {
          return 1;
        }
        if (lowerA > lowerB) {
          return -1;
        }
        return 0;
      });
      return { ...state, animeList: tempDesc };

    default:
      return state;
  }
};

export default reducer;
