import { combineReducers } from "redux";
import { BookReducer } from "./book";
import { LibraryReducer} from "./library"
export default combineReducers({
    BookReducer,
    LibraryReducer
});