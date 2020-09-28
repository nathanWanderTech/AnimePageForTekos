let initialState = {
  isShowed: false,
  selectedAnime: {},
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "VIEW_DETAIL_REVISED_VERSION":
      console.log(payload);
      return { ...state, isShowed: true, selectedAnime: payload };
    case "CLOSE_MODAL_REVISED_VERSION":
      return { ...state, isShowed: false, selectedAnime: {} };
    default:
      return state;
  }
};

export default reducer;
