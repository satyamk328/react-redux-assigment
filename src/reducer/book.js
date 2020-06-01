import {
    ERROR ,
    PENDING ,
    FETCH_BOOK ,
    FETCH_BOOK_SUCCESS ,
   
  } from "../actions/types";
  
  const initialState = {
    pending: false,
    books: [],
    error: null,
  };
  
  export const BookReducer = function (state = initialState, action) {
     console.log("state", state, action);
  
    switch (action.type) {
      case PENDING:
        return {
          ...state,
          pending: true,
        };
  
      case ERROR:
        return {
          ...state,
          pending: false,
          error: action.error,
        };
      case FETCH_BOOK:
        return [];
      case FETCH_BOOK_SUCCESS:
        return {
          ...state,
          pending: false,
          books: [...action.payload.data]
        };
  
      default:
        return state;
    }
  };
  