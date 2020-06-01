import {
    ERROR ,
    PENDING ,
    FETCH_LIBRARY ,
    FETCH_LIBRARY_SUCCESS ,
   
  } from "../actions/types";
  
  const initialState = {
    pending: false,
    libraries: [],
    error: null,
  };
  
  export const LibraryReducer = function (state = initialState, action) {
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
      case FETCH_LIBRARY:
        return [];
      case FETCH_LIBRARY_SUCCESS:
        return {
          ...state,
          pending: false,
          libraries: [...action.payload.data]
        };
  
      default:
        return state;
    }
  };
  