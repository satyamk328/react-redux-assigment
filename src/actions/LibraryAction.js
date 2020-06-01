import {
  PENDING,
  ERROR,
  FETCH_LIBRARY_SUCCESS
} from "./types/index";
import { toast } from "react-toastify";

import {
  fetchLibrary,
} from "./../data/library";

// fetch contact action
export function FetchLibrary(params) {
  return async (dispatch) => {
    dispatch({
      type: PENDING,
    });

    try {
      const library = await fetchLibrary(params).then((res) => res);
      dispatch({
        type: FETCH_LIBRARY_SUCCESS,
        payload: library.data,
      });
    } catch (err) {
        dispatch({
          type: ERROR,
          error: err.response,
        });
    }
  };
}

