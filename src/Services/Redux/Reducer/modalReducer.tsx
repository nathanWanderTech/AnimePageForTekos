import { ReduxAction } from "../../../Models/type";
import { IAnime } from "../../../Models/type";

interface IModalReducer {
  isShowed: boolean;
  selectedMovie: any;
}
const initialState: IModalReducer = {
  isShowed: false,
  selectedMovie: {},
};

const reducer = (state = initialState, action: ReduxAction) => {
  const { type, payload } = action;
  switch (type) {
    case "VIEW_DETAIL":
      return { ...state, isShowed: true, selectedMovie: payload };
    case "CLOSE_MODAL":
      return { ...state, isShowed: false, selectedMovie: payload };
    default:
      return state;
  }
};

export default reducer;
