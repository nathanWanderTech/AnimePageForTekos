import { combineReducers, createStore } from "redux";
import animeReducer from "./Redux/Reducer/animeReducer";
import modalReducer from "../Services/Redux/Reducer/modalReducer";
import animeListReducer from "../RevisedVersion/Services/Redux/Reducer/animeListRReducer";
import modalRReducer from "../RevisedVersion/Services/Redux/Reducer/modalRReducer";

const rootReducer = combineReducers({
  //reducers 3-hour version
  animeReducer,
  modalReducer,

  //reducers for revised version
  animeListReducer,
  modalRReducer,
});

const store = createStore(rootReducer);

export default store;
