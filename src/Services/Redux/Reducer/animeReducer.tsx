import { ReduxAction, IAnime } from "../../../Models/type";
let initialState: any = [];

const reducer = (state = initialState, action: ReduxAction) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_LIST":
      state = payload;
      return [...state];
    default:
      return state;
  }
};

export default reducer;
