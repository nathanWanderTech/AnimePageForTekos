import { combineReducers, createStore } from "redux";
import animeReducer from "./Redux/Reducer/animeReducer";
import modalReducer from "../Services/Redux/Reducer/modalReducer";

const rootReducer = combineReducers({
  //reducers
  animeReducer,
  modalReducer,
});

const store = createStore(rootReducer);

export default store;
