import {
    PENDING,
    ERROR,
    FETCH_BOOK_SUCCESS

  } from "./types/index";
  
  import {
    fetchBook,
  } from "./../data/book";
  
  // fetch contact action
  export function FetchBook(params) {
    return async (dispatch) => {
      dispatch({
        type: PENDING,
      });
  
      try {
        console.log(".........................");
        const books = await fetchBook(params).then((res) => res);
        dispatch({
          type: FETCH_BOOK_SUCCESS,
          payload: books.data,
        });
      } catch (err) {
          dispatch({
            type: ERROR,
            error: err.response,
          });
      }
    };
  }
  
  